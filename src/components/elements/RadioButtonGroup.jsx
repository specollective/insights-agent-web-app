import { Formik, Form, Field } from 'formik';

function RadioButtonGroup ({ options, name, value }) {
  return (
    <div className="radio-button-group">
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
              { option.label }
            </label>
            <br/>
          </div>
        )
      })}
    </div>
  )
}

export default RadioButtonGroup
