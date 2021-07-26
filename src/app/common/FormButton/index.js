import React from 'react'
import { StyledFormButton } from './styles'

export const FormButton = ({ children, marginTop }) => {
  return (
    <StyledFormButton
      type='submit'
      fullWidth
      variant='contained'
      size='large'
      color='primary'
      style={{ padding: '15px 24px' }}
      sx={{ mt: (marginTop || 3), mb: 2 }}
    >
      {children}
    </StyledFormButton>
  )
}
