import { createTheme } from '@mui/material/styles'

const radius = '8px'

const theme = createTheme({
  palette: {
    primary: {
      light: '#5e4199',
      main: '#2e186a',
      dark: '#04003f',
      contrastText: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Sora Extra Light',
    fontSize: 14,
    body2: {
      fontSize: 14
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: radius
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: radius
        }
      }
    }
  }
})

export default theme
