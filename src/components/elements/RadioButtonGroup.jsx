import { Fragment, useState, useEffect } from 'react'
import { Formik, Form, Field, useFormikContext } from 'formik';

function RadioButtonGroup ({ options, name, value, isHorizontal=false, ...rest }) {
  const horizontalClass =  isHorizontal ? "horizontal" : "";
  const [selectedOption, setSelectedOption] = useState('');
  const [otherOptionText, setOtherOptionText] = useState('');

  const {
    values,
    touched,
    setFieldValue,
  } = useFormikContext();

  console.log(values)

  // useEffect(() => {
  //   if (selectedOption == 'other') {
  //     setFieldValue(name, otherOptionText)
  //   }
  // }, [selectedOption, otherOptionText])

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
              onClick={() => setSelectedOption(value)(option.value)}
            />
            <label className="mt-4" htmlFor={id}>
              { option.label }
            </label>
            
            {option.secondaryLabel ? (
              <label htmlFor={id}>{ option.secondaryLabel }</label>
            ) : ""}

            {option.value === "other" &&
              <Field className="border-b-2 border-black" size="40"
                type="text"
                name={`${name}-other-text`}
                value={otherOptionText}
                onChange={({ target: { value } }) => setOtherOptionText(value)}
              />
            }

          </div>
        )
      })}
    </div>
  )
}

export default RadioButtonGroup
