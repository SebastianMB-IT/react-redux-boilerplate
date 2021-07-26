import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import PasswordResetForm from '../components/PasswordResetForm'
import Copyright from '../components/Copyright'
import LogoAvatar from '../components/LogoAvatar'

export default function SignIn () {
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <LogoAvatar />
        <Typography component='h1' variant='h5'>
          Reset password
        </Typography>
        <PasswordResetForm />
      </Box>
      <Box mt={12}>
        <Copyright />
      </Box>
    </Container>
  )
}
