import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ButtonWhite from './button-white'

const TitleWrapper = styled.div`
  width: 100%;
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

const HeadTitle = styled.h1`
  color: #ffffff;
  font-size: 6rem;
  margin-bottom: 2rem;
`

const SubTitle = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
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
              image_src {
                alt
                image_link {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ImageWrapper>
        <TitleWrapper>
          <SubTitle>
            {data.file.childMarkdownRemark.frontmatter.subheading}
          </SubTitle>
          <HeadTitle>
            {data.file.childMarkdownRemark.frontmatter.heading}
          </HeadTitle>
          <ButtonWhite
            to={data.file.childMarkdownRemark.frontmatter.button.buttonlink}
          >
            {data.file.childMarkdownRemark.frontmatter.button.buttontext}
          </ButtonWhite>
        </TitleWrapper>
        <Img
          fluid={
            data.file.childMarkdownRemark.frontmatter.image_src.image_link
              .childImageSharp.fluid
          }
          alt={data.file.childMarkdownRemark.frontmatter.image_src.alt}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
          }}
        />
      </ImageWrapper>
    )}
  />
)

export default HeaderImage
