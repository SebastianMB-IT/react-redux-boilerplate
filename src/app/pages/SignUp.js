import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import SignUpForm from '../components/SignUpForm'
import Copyright from '../components/Copyright'
import LogoAvatar from '../components/LogoAvatar'

export default function SignUp () {
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
          Create an account
        </Typography>
        <SignUpForm />
      </Box>
      <Box mt={12}>
        <Copyright />
      </Box>
    </Container>
  )
}
