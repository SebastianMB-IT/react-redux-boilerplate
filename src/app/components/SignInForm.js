import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import SignInSchema from '../validators/SignInSchema'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import { FormButton } from '../common/FormButton'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { useLoginMutation } from '../services/User'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

export default function SignInForm () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(SignInSchema)
  })

  const history = useHistory()
  const [login] = useLoginMutation()
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (d) => {
    try {
      const user = await login(d).unwrap()
      console.log(user)
      history.push('/app/dashboard')
      errorMessage && setErrorMessage('')
    } catch (error) {
      setErrorMessage(error.data.message)
    }
  }

  return (
    <>
      {errorMessage && (
        <Stack sx={{ width: '100%', marginTop: 3, marginBottom: 2 }}>
          <Alert variant='outlined' severity='error'>
            {errorMessage}
          </Alert>
        </Stack>
      )}
      <Box
        component='form'
        noValidate
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          label='Email Address'
          autoComplete='email'
          autoFocus
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email')}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          label='Password'
          type='password'
          autoComplete='current-password'
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password')}
        />
        <FormControlLabel
          control={
            <Checkbox value='remember' name='remember' color='primary' />
          }
          label='Remember me'
          sx={{ fontSize: 14 }}
        />
        <FormButton>Sign In</FormButton>
        <Grid
          container
          sx={{
            fontSize: 14
          }}
        >
          <Grid item xs>
            <RouterLink to='/password_reset'>{'Forgot password?'}</RouterLink>
          </Grid>
          <Grid item>
            <RouterLink to='/signup'>
              {"Don't have an account? Sign Up"}
            </RouterLink>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
