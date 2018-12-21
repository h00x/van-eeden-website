import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SecondItem = () => {
  const ContentWrapper = styled.div`
    margin: 6rem 0;
    text-align: center;
    position: relative;
  `

  const TextWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
  `

  const Heading = styled.h2`
    box-shadow: -16px 48px 0px 0px rgba(250, 255, 244, 1);
  `

  const Text = styled.p`
    margin-bottom: 3rem;
  `

  const HyacintOne = styled(Img)`
    position: absolute !important;
    top: 8rem;
    left: 5%;
    z-index: -100;
  `

  const HyacintTwo = styled(Img)`
    position: absolute !important;
    top: 4rem;
    right: 5%;
    z-index: -100;
  `

  return (
    <StaticQuery
      query={graphql`
        query SecondBlock {
          file(relativePath: { eq: "second-block.md" }) {
            childMarkdownRemark {
              frontmatter {
                heading
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
          hyacintOne: file(relativePath: { eq: "hyacint-bg1.jpg" }) {
            childImageSharp {
              fixed(width: 283, quality: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          hyacintTwo: file(relativePath: { eq: "hyacint-bg2.jpg" }) {
            childImageSharp {
              fixed(width: 312, quality: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <ContentWrapper>
          <TextWrapper>
            <Heading>
              {data.file.childMarkdownRemark.frontmatter.heading}
            </Heading>
            <Text>{data.file.childMarkdownRemark.rawMarkdownBody}</Text>
            <Img
              fluid={
                data.file.childMarkdownRemark.frontmatter.image_src.image_link
                  .childImageSharp.fluid
              }
              alt={data.file.childMarkdownRemark.frontmatter.image_src.alt}
            />
          </TextWrapper>
          <HyacintOne fixed={data.hyacintOne.childImageSharp.fixed} alt="" />
          <HyacintTwo fixed={data.hyacintTwo.childImageSharp.fixed} alt="" />
        </ContentWrapper>
      )}
    />
  )
}

export default SecondItem
