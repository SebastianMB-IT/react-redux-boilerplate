import React from 'react'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import SignInForm from '../components/SignInForm'
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
          Sign in
        </Typography>
        <SignInForm />
      </Box>
      <Box mt={12}>
        <Copyright />
      </Box>
    </Container>
  )
}
