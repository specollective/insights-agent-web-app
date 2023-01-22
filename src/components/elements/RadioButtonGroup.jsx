import { Field } from 'formik';

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

            {/* {option.value === "other" &&
              <Field 
                className="border-b-2 border-black" 
                size="40"
                type="text"
                maxLength={50}
                placeholder="50 character limit"
                name={`${name}OtherOptionText`}
              />
            } */}

          </div>
        )
      })}
    </div>
  )
}

export default RadioButtonGroup
