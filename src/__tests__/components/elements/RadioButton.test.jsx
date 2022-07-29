import React from 'react';
import { Form, Formik } from 'formik';
import { render, screen, fireEvent, act } from '@testing-library/react';
import RadioButtonGroup from 'components/elements/RadioButtonGroup';

const FOOD_OPTIONS = [
    {
      label: 'Pizza', value: 'pizza', secondaryLabel: 'delicious'
    },
    {
      label: 'Salad', value: 'salad', secondaryLabel: 'wholesome'
    },
  ]

  describe('RadioButtonGroup', () => {
    it('renders label', () => {
      render(
        <Formik>
          <Form>
            <RadioButtonGroup
              options={FOOD_OPTIONS}
              name="favorite-foods"
              value={'pizza'}
            />
          </Form>
        </Formik>
      );
  
      expect(screen.getByText('Pizza')).toBeInTheDocument();
      expect(screen.getByText('delicious')).toBeInTheDocument();
    });
  
    it('handles selection', async () => {
      const mockHandleChange = jest.fn();
  
      render(
        <Formik initialValues={{ label: 'Pizza', value: 'pizza'}}>
          <Form onChange={mockHandleChange}>
            <RadioButtonGroup
                options={FOOD_OPTIONS}
                name="favorite-foods"
            />
          </Form>
        </Formik>
      );
  
      await act(() => {
        // fireEvent.click(screen.getByTestId('radio-button-favorite-foods-salad'))
        fireEvent.click(screen.getByLabelText('Salad'))  
      });
      
      expect(mockHandleChange.mock.calls[0][0].target.name).toEqual('favorite-foods');
      expect(mockHandleChange.mock.calls[0][0].target.value).toEqual('salad');
    });
  });
  