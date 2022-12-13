import { Field } from 'formik'
import React from 'react'

function DropdownGroup ({ options, name }) {
  return (
    <Field
      data-testid={`dropdown-${name}`}
      component="select"
      name={name}
      className="dropdown-group"
    >
      { options.map(option => {
        return (
          <option
           key={option.value}
           value={option.value}
          >
          {option.label}
          </option>
        )
      })}
    </Field>
  )
}

export default DropdownGroup
