function RadioButtonGroup ({ options, name, value, onChange }) {
  return (
    <div className="radio-button-group">
      { options.map(options => {
        return (
          <div key={options.value}>
            <input
              checked={value === options.value}
              type="radio"
              id={options.value}
              name={name}
              value={options.value}
              onChange={onChange}
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
