import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ButtonWhite from './button-white'

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
  <StaticQuery
    query={graphql`
      query Header {
        file(relativePath: { eq: "header.md" }) {
          childMarkdownRemark {
            frontmatter {
              heading
              subheading
              button {
                buttontext
                buttonlink
              }
              backgroundImage {
                alt
                image
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ImageWrapper>
        <TitleWrapper>
          {console.log(data)}
          <h3>{data.file.childMarkdownRemark.frontmatter.subheading}</h3>
          <h1>{data.file.childMarkdownRemark.frontmatter.heading}</h1>
          <ButtonWhite>Test</ButtonWhite>
        </TitleWrapper>
      </ImageWrapper>
    )}
  />
)

export default HeaderImage
