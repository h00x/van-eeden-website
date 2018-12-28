import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SecondItem = () => {
  const ContentWrapper = styled.div`
    padding: 6rem 0;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #edefeb;
  `

  const TextWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    @media (max-width: 480px) {
      width: 90%;
    }
  `

  const Heading = styled.h2`
    margin-bottom: 2rem;
    display: inline-block;
    position: relative;
    &:after {
      content: '';
      width: 60%;
      height: 100%;
      left: 6rem;
      top: 2rem;
      background-color: rgba(250, 255, 244, 1);
      position: absolute;
      z-index: -1;
    }
  `

  const Text = styled.p`
    margin-bottom: 3rem;
  `

  const HyacintOne = styled(Img)`
    position: absolute !important;
    top: 8rem;
    left: 5%;
    z-index: -100;
    @media (max-width: 960px) {
      left: -10%;
    }
    @media (max-width: 720px) {
      left: -20%;
    }
    @media (max-width: 480px) {
      display: none !important;
    }
  `

  const HyacintTwo = styled(Img)`
    position: absolute !important;
    top: 4rem;
    right: 5%;
    z-index: -100;
    @media (max-width: 960px) {
      display: none !important;
    }
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
              fixed(width: 174, quality: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          hyacintTwo: file(relativePath: { eq: "hyacint-bg2.jpg" }) {
            childImageSharp {
              fixed(width: 229, quality: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <ContentWrapper id="second-item">
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
