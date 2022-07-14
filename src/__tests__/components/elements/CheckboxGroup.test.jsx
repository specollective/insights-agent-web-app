import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import CheckboxGroup from 'components/elements/CheckboxGroup';

const FOOD_OPTIONS = [
  {
    label: 'Pizza', value: 'pizza'
  },
  {
    label: 'Salad', value: 'salad',
  },
  {
    label: 'Decline favorite foods', value: 'decline',
  }
]

describe('CheckboxGroup', () => {
  it('renders label', () => {
    render(
      <CheckboxGroup
        options={[{ label: 'Pizza', value: 'pizza'}]}
        name="favorite-foods"
        value={['pizza']}
        onChange={jest.fn()}
      />
    );

    expect(screen.getByText('Pizza')).toBeInTheDocument();
  });

  it('calls onChange prop with correct arguments when checkbox is selected', async () => {
    const mockOnChangeProp = jest.fn()

    render(
      <CheckboxGroup
        options={FOOD_OPTIONS}
        name="favorite-foods"
        value={[]}
        onChange={mockOnChangeProp}
      />
    );

    const pizzaCheckbox = screen.getByText('Pizza');

    await fireEvent.click(pizzaCheckbox);

    expect(mockOnChangeProp).toHaveBeenCalledWith({
      target: {
        name: 'favorite-foods',
        value: ['pizza'],
      }
    });
  });

  it('calls onChange prop with correct args when checkbox is unselected', async () => {
    const mockOnChangeProp = jest.fn()

    render(
      <CheckboxGroup
        options={FOOD_OPTIONS}
        name="favorite-foods"
        value={['pizza']}
        onChange={mockOnChangeProp}
      />
    );

    const pizzaCheckbox = screen.getByLabelText('Pizza');

    expect(pizzaCheckbox.checked).toEqual(true);

    await fireEvent.click(screen.getByText('Pizza'));

    expect(mockOnChangeProp).toHaveBeenCalledWith({
      target: {
        name: 'favorite-foods',
        value: [],
      }
    });
  });

  it('handle multi-select', async () => {
    const mockOnChangeProp = jest.fn();

    render(
      <CheckboxGroup
        options={FOOD_OPTIONS}
        name="favorite-foods"
        value={['pizza']}
        onChange={mockOnChangeProp}
      />
    );

    const pizzaCheckbox = screen.getByLabelText('Pizza');

    expect(pizzaCheckbox.checked).toEqual(true);

    await fireEvent.click(screen.getByText('Pizza'));
    await fireEvent.click(screen.getByText('Salad'));

    expect(mockOnChangeProp).toHaveBeenCalledWith({
      target: {
        name: 'favorite-foods',
        value: ['pizza', 'salad'],
      }
    });
  });

  it('handle decline all', async () => {
    const mockOnChangeProp = jest.fn();

    render(
      <CheckboxGroup
        options={FOOD_OPTIONS}
        name="favorite-foods"
        value={['pizza']}
        onChange={mockOnChangeProp}
      />
    );

    const pizzaCheckbox = screen.getByLabelText('Pizza');

    expect(pizzaCheckbox.checked).toEqual(true);

    await fireEvent.click(screen.getByText('Pizza'));
    await fireEvent.click(screen.getByText('Salad'));
    await fireEvent.click(screen.getByText('Decline favorite foods'));

    expect(mockOnChangeProp).toHaveBeenCalledWith({
      target: {
        name: 'favorite-foods',
        value: ['decline'],
      }
    });
  });
});
