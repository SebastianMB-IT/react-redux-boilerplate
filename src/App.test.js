import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'

describe('function ciao', () => {
  it('renders learn react link', () => {
    expect.assertions(1)

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(getByText(/learn/i)).toBeInTheDocument()
  })
})
