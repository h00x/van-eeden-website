import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ButtonWhite from './button-white'

const TitleWrapper = styled.div`
  max-width: 960px;
  z-index: 100;
  position: absolute;
  top: 40%;
  margin: 0 auto;
  left: 0; 
  right: 0;
`

const ImageWrapper = styled.div`
  height: 85vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  @media (max-width: 800px) {
    height: 98vh;
  }
`

const HeadTitle = styled.h1`
  color: #ffffff;
  font-size: 6rem;
  margin-bottom: 6rem;
  display: inline-block;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 110%;
    left: -2rem;
    top: 2rem;
    background-color: rgba(250, 255, 244, 0.2);
    position: absolute;
    z-index: -1;
  }
  @media (max-width: 800px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
`

const SubTitle = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
  line-height: 2rem;
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
  }
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
          <div style={{ display: 'block' }}>
            <HeadTitle>
              {data.file.childMarkdownRemark.frontmatter.heading}
            </HeadTitle>
          </div>
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
