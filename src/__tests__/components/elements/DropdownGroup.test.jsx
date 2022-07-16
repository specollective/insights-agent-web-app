import React from 'react';
import { Form, Formik } from 'formik';
import { render, screen, fireEvent, act } from '@testing-library/react';
import DropdownGroup from 'components/elements/DropdownGroup';

const FOOD_OPTIONS = [
  {
    label: 'Pizza', value: 'pizza'
  },
  {
    label: 'Salad', value: 'salad',
  },
]

function findFormSection(screen, text) {
  return within(screen.getByText(text).closest('div'));
}

describe('DropdownGroup', () => {
  it('renders label', () => {
    render(
      <Formik>
        <Form>
          <DropdownGroup
            options={[{ label: 'Pizza', value: 'pizza'}]}
            name="favorite-foods"
            value={'pizza'}
          />
        </Form>
      </Formik>
    );

    expect(screen.getByText('Pizza')).toBeInTheDocument();
  });

  it('handles selection', async () => {
    const mockHandleChange = jest.fn();

    render(
      <Formik initialValues={{ label: 'pizza', value: 'pizza'}}>
        <Form onChange={mockHandleChange}>
          <DropdownGroup
            options={[
              { label: 'Pizza', value: 'pizza'},
              { label: 'Salad', value: 'salad'},
            ]}
            name="favorite-foods"
          />
        </Form>
      </Formik>
    );

    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('Salad')).toBeInTheDocument();

    await act(() => {
      fireEvent.change(screen.getByTestId('dropdown-favorite-foods'), {
        target: { value: 'salad' },
      });
    });

    expect(mockHandleChange.mock.calls[0][0].target.name).toEqual('favorite-foods');
    expect(mockHandleChange.mock.calls[0][0].target.value).toEqual('salad');
  });
});
