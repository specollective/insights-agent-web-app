import { Form } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DropdownGroup ({ options, name, value, onChange }) {

    function handleChange(e) {
      onChange(e)
    }

    return (
      <select name={name} onChange={handleChange} value={value} className="dropdown-group">
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
      </select>
    )
  }

export default DropdownGroup
