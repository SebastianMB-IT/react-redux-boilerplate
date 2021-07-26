import React from 'react'
import { withTranslation } from 'react-i18next'
import { SvgIcon } from '../../../common/SvgIcon'
import { Button } from '../../../common/Button'
import { Fade } from 'react-awesome-reveal'
import { Grid } from '@mui/material'
import { useHistory } from 'react-router-dom'
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper
} from './styles'

const RightBlock = ({ title, content, button, icon, t, id }) => {
  const history = useHistory()
  const goTo = (id, path) => {
    if (path) {
      history.push(path)
    } else {
      const element = document.getElementById(id)
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
  return (
    <RightBlockContainer>
      <Fade direction='right'>
        <Grid
          container
          id={id}
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={11}
        >
          <Grid item xs={12} sm={6}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === 'object' &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => goTo('about', item.path)}
                      >
                        {t(item.title)}
                      </Button>
                    )
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SvgIcon src={icon} width='100%' height='100%' />
          </Grid>
        </Grid>
      </Fade>
    </RightBlockContainer>
  )
}

export default withTranslation()(RightBlock)
