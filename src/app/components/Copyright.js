import React from 'react'
import Link from '@mui/material/Link'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Copyright () {
  return (
    <Container align='center'>
      <Grid
        container
        justifyContent='center'
        spacing={2}
      >
        <Grid item>
          <Link color='inherit' href='#'>
            Terms
          </Link>
        </Grid>
        <Grid item>
          <Link color='inherit' href='#'>
            Privacy
          </Link>
        </Grid>
        <Grid item>
          <Link color='inherit' href='#'>
            Security
          </Link>
        </Grid>
      </Grid>
      <Box mt={1} mb={1}>
        <Typography
          color='textSecondary'
          align='center'
          sx={{
            fontSize: 14
          }}
        >
          {'Copyright © '}
          <Link color='inherit' href='#'>
            ReactReduxBoilerplate
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  )
}
