import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormButton } from '../common/FormButton'

export default function SignUp () {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <Box component='form' noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete='fname'
            name='firstName'
            variant='outlined'
            required
            fullWidth
            id='firstName'
            label='First Name'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant='outlined'
            required
            fullWidth
            id='lastName'
            label='Last Name'
            name='lastName'
            autoComplete='lname'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant='outlined' fullWidth>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              label='Password'
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value='allowExtraEmails' color='primary' />}
            label={
              <div>
                <span>By creating an account, you agree to the</span>
                <Link>Terms of Service</Link>
                <span> and our </span>
                <Link>Privacy Policy</Link>.
              </div>
            }
          />
        </Grid>
      </Grid>
      <FormButton
        type='submit'
        fullWidth
        variant='contained'
        size='large'
        color='primary'
      >
        Sign Up
      </FormButton>
      <Grid
        container
        justifyContent='flex-end'
        sx={{
          fontSize: 14
        }}
      >
        <Grid item>
          <RouterLink to='/login'>
            <Link> Already have an account? Sign in </Link>
          </RouterLink>
        </Grid>
      </Grid>
    </Box>
  )
}
