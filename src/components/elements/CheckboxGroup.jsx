import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



function CheckboxGroup ({ options, name, value, onChange }) {
    function handleChange(e) {
        // debugger
        onChange(e.target.value, e.target.checked)
    }
    return (
      <div className="checkbox-group">
        { options.map(option => {
          return (
            <div key={option.value}>
              <input
                type="checkbox"
                id={option.value}
                name={name}
                value={option.value}
                checked={value.includes(option.value)}
                onChange={handleChange}
              />
              <label htmlFor={option.value}>{ option.label }</label>
              <br/>
            </div>
          )
        })}
      </div>
    )
  }
  
  export default CheckboxGroup