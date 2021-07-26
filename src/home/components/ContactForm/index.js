import { React } from 'react'
import { withTranslation } from 'react-i18next'
import { Slide } from 'react-awesome-reveal'
import { Button } from '../../common/Button'
import Block from '../Block'
import { Grid, TextField } from '@mui/material'
import {
  ContactContainer,
  FormGroup,
  ButtonContainer
} from './styles'

const Contact = ({ title, content, id, t }) => {
  return (
    <ContactContainer id={id}>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item lg={6} md={5} sm={12} xs={12}>
          <Slide direction='left'>
            <Block title={title} content={content} />
          </Slide>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Slide direction='right'>
            <FormGroup autoComplete='off'>
              <TextField
                id='filled-basic'
                label='Name'
                type="text"
                variant='filled'
                fullWidth={true}
                margin="dense"
              />
              <TextField
                id='filled-basic'
                label='Email'
                type="email"
                variant='filled'
                fullWidth={true}
                margin="dense"
              />
              <TextField
                id='filled-basic'
                label='Message'
                type="text"
                variant='filled'
                multiline
                rows={5}
                fullWidth={true}
                margin="dense"
              />
              <ButtonContainer>
                <Button name='submit'>{t('Send')}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Grid>
      </Grid>
    </ContactContainer>
  )
}

export default withTranslation()(Contact)
