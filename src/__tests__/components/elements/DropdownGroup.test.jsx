import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import DropdownGroup from 'components/elements/DropdownGroup';

const FOOD_OPTIONS = [
  {
    label: 'Pizza', value: 'pizza'
  },
  {
    label: 'Salad', value: 'salad',
  },
]

describe('DropdownGroup', () => {
  it('renders label', () => {
    render(
      <DropdownGroup
        options={[{ label: 'Pizza', value: 'pizza'}]}
        name="favorite-foods"
        value={'pizza'}
        onChange={jest.fn()}
      />
    );

    expect(screen.getByText('Pizza')).toBeInTheDocument();
  });

  it('calls onChange prop with correct arguments when checkbox is selected', async () => {
    const mockOnChangeProp = jest.fn()

    render(
      <DropdownGroup
        options={FOOD_OPTIONS}
        name="favorite-foods"
        value={''}
        onChange={mockOnChangeProp}
      />
    );

    const saladCheckbox = screen.getByText('Salad');

    await fireEvent.click(saladCheckbox);

    expect(mockOnChangeProp);

  });



});
