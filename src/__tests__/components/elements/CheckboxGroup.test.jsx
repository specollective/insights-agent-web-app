import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import CheckboxGroup from 'components/elements/CheckboxGroup';

describe('CheckboxGroup', () => {
  it('renders label', () => {
    render(
      <CheckboxGroup
        options={[{ label: 'Pizza', value: 'pizza' }]}
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
        options={[{ label: 'Pizza', value: 'pizza' }]}
        name="favorite-foods"
        value={[]}
        onChange={mockOnChangeProp}
      />
    );

    const pizzaCheckbox = screen.getByText('Pizza');

    await fireEvent.click(pizzaCheckbox);

    expect(mockOnChangeProp).toHaveBeenCalledWith('pizza', true);
  });

  it('calls onChange prop with correct args when checkbox is unselected', async () => {
    const mockOnChangeProp = jest.fn()

    render(
      <CheckboxGroup
        options={[{ label: 'Pizza', value: 'pizza' }]}
        name="favorite-foods"
        value={['pizza']}
        onChange={mockOnChangeProp}
      />
    );

    const pizzaCheckbox = screen.getByLabelText('Pizza');

    expect(pizzaCheckbox.checked).toEqual(true);

    await fireEvent.click(screen.getByText('Pizza'));

    expect(mockOnChangeProp).toHaveBeenCalledWith('pizza', false);
  });
});
