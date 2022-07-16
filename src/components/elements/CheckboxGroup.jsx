import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function buildNewSelection(existingList, selectedValue, checked) {
  const declineValue = 'decline';

  if (selectedValue === declineValue) {
    return checked ? [selectedValue] : []
  } else if (existingList.includes(declineValue)) {
    return [selectedValue]
  }

  return checked
    ? [...existingList, selectedValue]
    : existingList.filter(option => option !== selectedValue)
}

function CheckboxGroup ({ options, name, value, onChange }) {
  function handleChange({ target }) {
    // value is existing options on model
    const selectedValue = target.value;
    const checked = target.checked;
    const newListValue = buildNewSelection(value, selectedValue, checked)

    onChange(name, newListValue)
  }

  return (
    <div className="checkbox-group">
      { options.map(option => {
        const id = `${name}-${option.value}`
        return (
          <div key={option.value}>
            <input
              type="checkbox"
              id={id}
              name={name}
              value={option.value}
              checked={value.includes(option.value)}
              onChange={handleChange}
            />
            <label htmlFor={id}>{ option.label }</label>
            <br/>
          </div>
        )
      })}
    </div>
  )
}

export default CheckboxGroup
