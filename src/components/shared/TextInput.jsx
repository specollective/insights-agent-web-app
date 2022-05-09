import React from 'react'
import './textinput.css'
import { useTranslation } from 'react-i18next'

interface TextInputProps {
  value: string;
  onChange: (val:string) => void;
  placeholder?: string;
  label?: string;
  autoFocus?: boolean;
}

export default function TextInput({ value, onChange, placeholder, label }: TextInputProps) {
  const { t } = useTranslation();
  
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