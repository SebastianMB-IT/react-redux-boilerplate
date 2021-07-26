import React from 'react'
import { withTranslation } from 'react-i18next'
import { SvgIcon } from '../../../common/SvgIcon'
import { Fade } from 'react-awesome-reveal'
import { Grid } from '@mui/material'
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara
} from './styles'

const LeftContentBlock = ({ icon, title, content, section, t, id }) => {
  return (
    <LeftContentSection>
      <Fade direction='left'>
        <Grid
          container
          id={id}
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={11}
        >
          <Grid item xs={12} sm={6}>
            <SvgIcon src={icon} width='100%' height='100%' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Grid
                  container
                  direction='row'
                  justifyContent='space-between'
                  spacing={5}
                >
                  {typeof section === 'object' &&
                    section.map((item, id) => {
                      return (
                        <Grid item key={id} xs={6}>
                          <SvgIcon src={item.icon} width='60px' height='60px' />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Grid>
                      )
                    })}
                </Grid>
              </ServiceWrapper>
            </ContentWrapper>
          </Grid>
        </Grid>
      </Fade>
    </LeftContentSection>
  )
}

export default withTranslation()(LeftContentBlock)
