import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



function CheckboxGroup ({ options, name, value, onChange }) {
    return (
      <div className="checkbox-group">
        { options.map(options => {
          return (
            <div key={options.value}>
              <input
                type="checkbox"
                id={options.value}
                name={name}
                value={options.value}
                checked={FormData.value.includes(options.value)}
                onChange={onChange}
              />
              <label htmlFor={options.value}>{ options.label }</label>
              console.log(options)
              <br/>
            </div>
          )
        })}
      </div>
    )
  }
  
  export default CheckboxGroup