import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import { SvgIcon } from '../../common/SvgIcon'
import { Button } from '../../common/Button'
import { Box, Drawer, Container } from '@mui/material'
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  Col,
  AntCol,
  DrawerBody
} from './styles'

const Header = ({ t }) => {
  const [visible, setVisibility] = useState(false)

  const showDrawer = () => {
    setVisibility(!visible)
  }

  const onClose = () => {
    setVisibility(!visible)
  }

  const MenuItems = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id)
      element.scrollIntoView({
        behavior: 'smooth'
      })
      setVisibility(false)
    }
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo('about')}>
          <Span>{t('About')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('mission')}>
          <Span>{t('Mission')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('product')}>
          <Span>{t('Product')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: '180px' }}
          onClick={() => scrollTo('contact')}
        >
          <Span>
            <Button>{t('Let\'s Chat')}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    )
  }

  return (
    <HeaderSection>
      <Container maxWidth='lg'>
        <Box component='nav' display='flex' justifyContent='space-between'>
          <LogoContainer
            to='/'
            aria-label='homepage'
            style={{ alignItems: 'center' }}
          >
            <SvgIcon src='logo.svg' width='101px' height='64px' />
          </LogoContainer>
          <NotHidden>
            <MenuItems />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Box>
        <Drawer anchor='right' open={visible} onClose={onClose}>
          <DrawerBody>
            <AntCol style={{ marginBottom: '2.5rem' }}>
              <Label onClick={onClose}>
                <Col>
                  <Menu>Menu</Menu>
                </Col>
              </Label>
            </AntCol>
            <MenuItems />
          </DrawerBody>
        </Drawer>
      </Container>
    </HeaderSection>
  )
}

export default withTranslation()(Header)
