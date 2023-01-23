import React from 'react'
import { Field } from 'formik';

export default function TextInput({ name, maxLength, placeholder }) {
  return (
    <>
      <Field 
        className="border-b-2 border-black" 
        size="40"
        type="text"
        maxLength={maxLength}
        placeholder={placeholder}
        name={name}
      />
    </>
  )
}