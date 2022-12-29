import { Formik, Form, Field } from 'formik';
import { Fragment } from 'react'
import TextInput from './TextInput';

function RadioButtonGroup ({ options, name, value, isHorizontal=false, ...rest }) {
  const horizontalClass =  isHorizontal ? "horizontal" : "";
  return (
    <div className={`radio-button-group ${horizontalClass}`}>
      { options.map(option => {
        const id = `${name}-${option.value}`

        return (
          <div className="radio-button-container" key={option.value}>
            <Field
              checked={value === option.value}
              type="radio"
              id={id}
              data-testid={`radio-button-${name}-${option.value}`}
              name={name}
              value={option.value}
            />
            <label className="mt-4" htmlFor={id}>
              { option.label }
            </label>
            
            {option.secondaryLabel ? (
              <label htmlFor={id}>{ option.secondaryLabel }</label>
            ) : ""}
            {value && option.value === "other" ? <TextInput/>: ""}
          </div>
        )
      })}
    </div>
  )
}

export default RadioButtonGroup
