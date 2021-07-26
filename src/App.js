import React from 'react'
import SignIn from './app/pages/SignIn'
import SignUp from './app/pages/SignUp'
import PasswordReset from './app/pages/PasswordReset'
import Dashboard from './app/pages/Dashboard'
import Home from './home/pages/Home'
import theme from './theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { GlobalStyles } from './theme/styles'
import { Helmet } from 'react-helmet'
import { useGetInfoQuery } from './app/services/Info'
import { setInfo } from './app/features/Info'
import { useDispatch } from 'react-redux'

function App () {
  const { data } = useGetInfoQuery()
  const dispatch = useDispatch()
  dispatch(setInfo(data))

  return (
    <>
      <Helmet>
        <meta name='robots' content='noindex' />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <SignIn />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/password_reset'>
              <PasswordReset />
            </Route>
            <Route path='/app/dashboard'>
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
