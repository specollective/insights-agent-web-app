import { Form, Field } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DropdownGroup ({ options, name, value }) {
    return (
      <Field
        data-testid={`dropdown-${name}`}
        component="select"
        name={name}
        value={value}
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
