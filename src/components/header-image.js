import React from 'react'
import styled from 'styled-components'

import ButtonWhite from './button-white'
import Image from '../components/image'

const TitleWrapper = styled.div`
  max-width: 50%;
  z-index: 100;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ImageWrapper = styled.div`
  height: 85vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const HeaderImage = () => (
  <ImageWrapper>
    <TitleWrapper>
      <h3>Test</h3>
      <h1>Test</h1>
      <ButtonWhite>Test</ButtonWhite>
    </TitleWrapper>
    <Image />
  </ImageWrapper>
)

export default HeaderImage
