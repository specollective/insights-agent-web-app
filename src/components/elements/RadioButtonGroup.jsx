import { Formik, Form, Field } from 'formik';
import { Fragment } from 'react'

//added isHorizontal parameter to RadioButtonGroup set default of false//
//horizontalClass sets className for RadioButtonGroup to "horizontal" if the isHorizontal parameter//
// from surveypage.jsx is true, so can modify through CSS to make it horizontal

function RadioButtonGroup ({ options, name, value, isHorizontal=false }) {
  const horizontalClass =  isHorizontal ? "horizontal" : "";
  return (
    <div className= {`radio-button-group ${horizontalClass}`}>
      { options.map(option => {
        const id = `${name}-${option.value}`

        return (
          <div key={option.value}>
            <Field
              checked={value === option.value}
              type="radio"
              id={id}
              name={name}
              value={option.value}
            />
            <label htmlFor={id}>
              {`${ option.label }`}
            </label>
            
            {option.secondaryLabel ? (
              <label htmlFor={id}>{ option.secondaryLabel }</label>
            ) : ""}
          </div>
        )
      })}
    </div>
  )
}

export default RadioButtonGroup
