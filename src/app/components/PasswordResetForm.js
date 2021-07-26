import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { FormButton } from '../common/FormButton'

export default function PasswordResetForm () {
  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='email'
        label='Enter your email address'
        name='email'
        autoComplete='email'
      />
      <FormButton
        type='submit'
        fullWidth
        variant='contained'
        size='large'
        color='primary'
        marginTop={2}
      >
        Send reset link
      </FormButton>
    </Box>
  )
}
