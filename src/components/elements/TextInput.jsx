import React from 'react'
import './textinput.css'

interface TextInputProps {
  value: string;
  onChange: (val:string) => void;
  placeholder?: string;
  label?: string;
  autoFocus?: boolean;
}

export default function TextInput({ value, onChange, placeholder, label }: TextInputProps) {
  return (
    <>
      <div>
        <input
          value={value}
          onChange={({ target: { value } }) => onChange(value)}
          placeholder={placeholder}
        />
      </div>
    </>
  )
}