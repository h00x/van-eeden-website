import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ButtonPurple from './button-purple'

const FirstItem = () => {
  const ContentWrapper = styled.div`
    margin: 6rem 0;
  `

  const TextContent = styled.div`
    width: 50%;
    padding: 0 6rem;
    display: inline-block;
    vertical-align: middle;
  `

  const Heading = styled.h2`
    box-shadow: -16px 48px 0px 0px rgba(250, 255, 244, 1);
  `

  const Image = styled(Img)`
    width: 50%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: -16px 48px 0px 0px rgba(250, 255, 244, 1);
  `

  return (
    <StaticQuery
      query={graphql`
        query FirstBlock {
          file(relativePath: { eq: "first-block.md" }) {
            childMarkdownRemark {
              fields {
                imagelink {
                  childImageSharp {
                    fluid(quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              frontmatter {
                heading
                button {
                  buttontext
                  buttonlink
                }
                image {
                  alt
                }
              }
              rawMarkdownBody
            }
          }
        }
      `}
      render={data => (
        <ContentWrapper>
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
              data.file.childMarkdownRemark.fields.imagelink.childImageSharp
                .fluid
            }
            alt={data.file.childMarkdownRemark.frontmatter.image.alt}
          />
        </ContentWrapper>
      )}
    />
  )
}

export default FirstItem
