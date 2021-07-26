import React, { lazy, Suspense } from 'react'
import { Container } from '@mui/material'
import IntroContent from '../../content/IntroContent.json'
import MiddleBlockContent from '../../content/MiddleBlockContent.json'
import AboutContent from '../../content/AboutContent.json'
import MissionContent from '../../content/MissionContent.json'
import ProductContent from '../../content/ProductContent.json'
import ContactContent from '../../content/ContactContent.json'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Contact = lazy(() => import('../../components/ContactForm'))
const MiddleBlock = lazy(() =>
  import('../../components/MiddleBlock')
)
const ScrollToTop = lazy(() =>
  import('../../common/ScrollToTop')
)
const ContentBlock = lazy(() =>
  import('../../components/ContentBlock')
)

export default function Home () {
  return (
    <>
      <Suspense fallback={<></>}>
        <Header />
        <Container maxWidth='lg'>
          {ScrollToTop && <ScrollToTop />}
          {ContentBlock && (
            <ContentBlock
              type='right'
              title={IntroContent.title}
              content={IntroContent.text}
              button={IntroContent.button}
              icon='developer.svg'
              id='intro'
            />
          )}
          {MiddleBlock && (
            <MiddleBlock
              title={MiddleBlockContent.title}
              content={MiddleBlockContent.text}
              button={MiddleBlockContent.button}
            />
          )}
          {ContentBlock && (
            <>
              <ContentBlock
                type='left'
                title={AboutContent.title}
                content={AboutContent.text}
                section={AboutContent.section}
                icon='graphs.svg'
                id='about'
              />
              <ContentBlock
                type='right'
                title={MissionContent.title}
                content={MissionContent.text}
                icon='product-launch.svg'
                id='mission'
              />
              <ContentBlock
                type='left'
                title={ProductContent.title}
                content={ProductContent.text}
                icon='waving.svg'
                id='product'
              />
            </>
          )}
          {Contact && (
            <Contact
              title={ContactContent.title}
              content={ContactContent.text}
              id='contact'
            />
          )}
        </Container>
        <Footer />
      </Suspense>
    </>
  )
}
