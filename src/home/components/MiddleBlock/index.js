import React from 'react'
import { Grid } from '@mui/material'
import { withTranslation } from 'react-i18next'
import { Slide } from 'react-awesome-reveal'
import { Button } from '../../common/Button'
import { MiddleBlockSection, Content, ContentWrapper } from './styles'

const MiddleBlock = ({ title, content, button, t }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <MiddleBlockSection>
      <Slide direction='up'>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <ContentWrapper>
            <Grid item xs={12}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name='submit' onClick={() => scrollTo('mission')}>
                  {t(button)}
                </Button>
              )}
            </Grid>
          </ContentWrapper>
        </Grid>
      </Slide>
    </MiddleBlockSection>
  )
}

export default withTranslation()(MiddleBlock)
