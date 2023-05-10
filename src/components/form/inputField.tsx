import React from 'react'
import { Control, useController } from 'react-hook-form'
import { Box } from '@mui/system'
import { TextField, TextFieldProps } from '@mui/material'

export type InputFieldProps = TextFieldProps & {
  name: string
  label?: String
  control: Control<any>
}

export default function InputField({
  name,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  name: externalName,
  value: externalValues,
  ...rest
}: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  // render whatever you want in form
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      fullWidth
      size="small"
      margin="normal"
      variant="outlined"
      error={!!error}
      helperText={error?.message}
      {...rest}
    ></TextField>
  )
}
