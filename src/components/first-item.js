import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ButtonPurple from './button-purple'

const FirstItem = () => {
  const ContentWrapper = styled.div`
    padding: 6rem 0;
    text-align: right;
    @media (max-width: 960px) {
      text-align: center;
    }
  `

  const TextContent = styled.div`
    width: 50%;
    max-width: 50rem;
    padding: 0 6rem;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    @media (max-width: 960px) {
      text-align: center;
      width: 90%;
      padding: 0;
      margin: 0 auto;
      margin-bottom: 3rem;
    }
  `

  const Heading = styled.h2`
    margin-bottom: 2rem;
    display: inline-block;
    position: relative;
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      left: 1rem;
      top: 2rem;
      background-color: rgba(250, 255, 244, 1);
      position: absolute;
      z-index: -1;
    }
  `

  const Image = styled(Img)`
    width: 50%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: -16px 48px 0px 0px rgba(250, 255, 244, 1);
    @media (max-width: 480px) {
      width: 100%;
    }
  `

  return (
    <StaticQuery
      query={graphql`
        query FirstBlock {
          file(relativePath: { eq: "first-block.md" }) {
            childMarkdownRemark {
              frontmatter {
                heading
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
              rawMarkdownBody
            }
          }
        }
      `}
      render={data => (
        <ContentWrapper id="first-item">
          <TextContent>
            <Heading>
              {data.file.childMarkdownRemark.frontmatter.heading}
            </Heading>
            <p>{data.file.childMarkdownRemark.rawMarkdownBody}</p>
            <ButtonPurple
              to={data.file.childMarkdownRemark.frontmatter.button.buttonlink}
            >
              {data.file.childMarkdownRemark.frontmatter.button.buttontext}
            </ButtonPurple>
          </TextContent>
          <Image
            fluid={
              data.file.childMarkdownRemark.frontmatter.image_src.image_link
                .childImageSharp.fluid
            }
            alt={data.file.childMarkdownRemark.frontmatter.image_src.alt}
          />
        </ContentWrapper>
      )}
    />
  )
}

export default FirstItem
