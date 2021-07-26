import React from 'react'
import { StyledContainer } from './styles'

const Container = ({ border, children }) => (
  <StyledContainer border={border}>{children}</StyledContainer>
)

export default Container
