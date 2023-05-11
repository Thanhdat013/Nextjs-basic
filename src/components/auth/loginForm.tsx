import React from 'react'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, CircularProgress, IconButton, InputAdornment } from '@mui/material'
import { useForm } from 'react-hook-form'
import InputField from '../form/inputField'

import { LoginPayload } from '@/models/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
export interface LoginFormProps {
  onSubmit?: (payload: LoginPayload) => void
}

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

export default function LoginForm({ onSubmit }: LoginFormProps) {
  // validate with yub
  const schema = yup.object().shape({
    username: yup
      .string()
      .required('Please enter username')
      .min(4, 'Username is required at least 4 characters'),
    password: yup
      .string()
      .required('Please enter password')
      .min(6, 'Password is required at least 6 characters'),
  })

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleLoginSubmit = async (payload: LoginPayload) => {
    await onSubmit?.(payload)
  }
  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" label="Username" control={control} type="text" />
      <InputField
        name="password"
        control={control}
        label="Password"
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        disabled={isSubmitting}
        startIcon={isSubmitting ? <CircularProgress color="inherit" size="1em" /> : null}
        variant="contained"
        type="submit"
        fullWidth
        sx={{ mt: 2 }}
        color="warning"
      >
        Login
      </Button>
    </Box>
  )
}
