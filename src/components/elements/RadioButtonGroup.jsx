import { Formik, Form, Field } from 'formik';
import { Fragment } from 'react'
import ValidatedInput from './ValidatedInput';

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
              data-testid={`radio-button-${name}-${option.value}`}
              name={name}
              value={option.value}
              component={ValidatedInput}
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
