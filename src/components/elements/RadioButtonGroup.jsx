import { Formik, Form, Field } from 'formik';

function RadioButtonGroup ({ options, name, value }) {
  return (
    <div className="radio-button-group">
      { options.map(options => {
        return (
          <div key={options.value}>
            <Field
              checked={value === options.value}
              type="radio"
              id={options.value}
              name={name}
              value={options.value}
            />
            <label htmlFor={options.value}>{ options.label }</label>
            <br/>
          </div>
        )
      })}
    </div>
  )
}

export default RadioButtonGroup
