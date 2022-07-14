import { Form } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DropdownGroup ({ options, name, value, onChange }) {
    function handleChange({ target }) {
      onChange(target.value, target.checked)
    }

    return (
      <select name={name} className="dropdown-group">
        { options.map(option => {
          return (
            <option
             key={option.value}
             value={option.value}
             name={name}
            >
            {option.label}
            </option>
            // <div key={option.value}>
            //   <option
            //     type="dropdown"
            //     id={option.value}
            //     name={name}
            //     value={option.value}
            //     onChange={handleChange}
            //   />
            //   <label htmlFor={option.value}>{ option.label }</label>
            //   <br/>
            // </div>
          )
        })}
      </select>
    )
  }
  
export default DropdownGroup
