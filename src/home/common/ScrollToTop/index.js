import React, { useEffect, useState } from 'react'
import { SvgIcon } from '../SvgIcon'
import { ScrollUpContainer } from './styles'
import { getScroll } from '../utils/getWindow'

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(0)

  const checkScrollTop = (event) => {
    const offsetFromTop = getScroll(event.target, true)

    if (!showScroll && offsetFromTop > 350) {
      setShowScroll(1)
    } else if (offsetFromTop <= 350) {
      setShowScroll(0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const scrollUp = () => {
    const element = document.getElementById('intro')
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    })
  }

  return (
    <ScrollUpContainer onClick={scrollUp} show={showScroll}>
      <SvgIcon src='scroll-top.svg' width='20px' height='20px' />
    </ScrollUpContainer>
  )
}

export default ScrollToTop
