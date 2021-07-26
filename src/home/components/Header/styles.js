import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MenuOutlined } from '@mui/icons-material'
import theme from '../../../theme'

export const HeaderSection = styled('header')`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`

export const LogoContainer = styled(Link)`
  display: flex;
`

export const NavLink = styled('div')`
  display: inline-block;
  text-align: center;
`

export const CustomNavLink = styled('div')`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`

export const ContactWrapper = styled('div')`
  cursor: pointer;
  width: ${(p) => (p.width ? '100%' : '110px')};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`

export const Burger = styled('div')`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;
  align-self: center;

  svg {
    fill: '#2e186a';
    font-size: 30px;
  }
`

export const NotHidden = styled('div')`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`

export const Menu = styled('h5')`
  font-size: 1.5rem;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 600;
  text-align: center;
`

export const DrawerBody = styled('div')`
  flex-grow: 1;
  padding: 24px;
  overflow: auto;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const CustomNavLinkSmall = styled(NavLink)`
  color: ${theme.palette.primary.main};
  
  font-size: 1.1rem;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }

`

export const Label = styled('span')`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`

export const Span = styled('span')`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`

export const Col = styled('div')`
  display: block;
  flex: 0 0 50%;
  max-width: 50%;
`

export const AntCol = styled('div')`
  position: relative;
  max-width: 100%;
  min-height: 1px;
`
