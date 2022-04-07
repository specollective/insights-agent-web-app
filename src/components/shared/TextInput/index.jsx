import React from 'react'
import './textinput.css'

interface TextInputProps {
  value: string;
  onChange: (val:string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

const TextInput = ({ value, onChange, placeholder }: TextInputProps) => {
  return (
    <>
      <input className='field'
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        placeholder={placeholder}
      />
    </>
  )
}

export default TextInput