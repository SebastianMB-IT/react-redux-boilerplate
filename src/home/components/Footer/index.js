import React from 'react'
import { withTranslation } from 'react-i18next'
import { SvgIcon } from '../../common/SvgIcon'
import { Grid, Container } from '@mui/material'

import i18n from 'i18next'
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer
} from './styles'

const Footer = ({ t }) => {
  const handleChange = (language) => {
    i18n.changeLanguage(language)
  }

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width='25px' height='25px' />
      </a>
    )
  }

  return (
    <>
      <FooterSection>
        <Container maxWidth='lg'>
          <Grid container justifyContent='space-between'>
            <Grid item lg={5} md={5} sm={6} xs={6}>
              <Language>{t('Contact')}</Language>
              <Large to='/'>{t('Tell us everything')}</Large>
              <Para>
                {t('Do you have any question? Feel free to reach out.')}
              </Para>
              <a href='mailto:l.qqbadze@gmail.com'>
                <Chat>{t("Let's Chat")}</Chat>
              </a>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6}>
              <Title>{t('Policy')}</Title>
              <Large to='/' left='true'>
                {t('Application Security')}
              </Large>
              <Large left='true' to='/'>
                {t('Software Principles')}
              </Large>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <Empty />
              <Large left='true' to='/'>
                {t('Support Center')}
              </Large>
              <Large left='true' to='/'>
                {t('Customer Support')}
              </Large>
            </Grid>
          </Grid>
          <Grid container justifyContent='space-between'>
            <Grid item lg={5} md={5} sm={6} xs={6}>
              <Empty />
              <Language>{t('Address')}</Language>
              <Para>Rancho Santa Margarita</Para>
              <Para>2131 Elk Street</Para>
              <Para>California</Para>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6}>
              <Title>{t('Company')}</Title>
              <Large left='true' to='/'>
                {t('About')}
              </Large>
              <Large left='true' to='/'>
                {t('Blog')}
              </Large>
              <Large left='true' to='/'>
                {t('Press')}
              </Large>
              <Large left='true' to='/'>
                {t('Careers & Culture')}
              </Large>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <Label htmlFor='select-lang'>{t('Language')}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange('en')}>
                  <SvgIcon
                    src='united-states.svg'
                    aria-label='homepage'
                    width='30px'
                    height='30px'
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange('es')}>
                  <SvgIcon
                    src='spain.svg'
                    aria-label='homepage'
                    width='30px'
                    height='30px'
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Grid>
          </Grid>
        </Container>
      </FooterSection>
      <Extra>
        <Container maxWidth='lg'>
          <Grid
            container
            justifyContent='space-between'
            alignItems='center'
            style={{ paddingTop: '3rem' }}
          >
            <NavLink to='/'>
              <LogoContainer>
                <SvgIcon
                  src='logo.svg'
                  aria-label='homepage'
                  width='101px'
                  height='64px'
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href='https://github.com/'
                src='github.svg'
              />
              <SocialLink
                href='https://twitter.com/'
                src='twitter.svg'
              />
              <SocialLink
                href='https://www.linkedin.com/'
                src='linkedin.svg'
              />
              <SocialLink
                href='https://medium.com/'
                src='medium.svg'
              />
            </FooterContainer>
          </Grid>
        </Container>
      </Extra>
    </>
  )
}

export default withTranslation()(Footer)
