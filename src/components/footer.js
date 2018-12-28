import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Footer = () => {
  const Wrapper = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    text-align: left;
    padding: 2rem;
    @media (max-width: 960px) {
      text-align: center;
    }
  `

  const Text = styled.p`
    margin: 0;
    display: inline-block;
  `

  const Menu = styled.ul`
    text-align: right;
    padding-right: 2rem;
    margin: 0;
    float: right;
    & li {
      display: inline-block;
      padding-left: 3rem;
      margin: 0;
    }
    @media (max-width: 960px) {
      text-align: center;
      float: none;
      & li {
        display: block;
      }
    }
  `

  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "footer-bg.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo: file(relativePath: { eq: "van-eeden-logo.png" }) {
            childImageSharp {
              fixed(width: 229) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          menuOne: file(relativePath: { eq: "first-block.md" }) {
            childMarkdownRemark {
              frontmatter {
                heading
              }
            }
          }
          menuTwo: file(relativePath: { eq: "second-block.md" }) {
            childMarkdownRemark {
              frontmatter {
                heading
              }
            }
          }
          menuThree: file(relativePath: { eq: "contact.md" }) {
            childMarkdownRemark {
              frontmatter {
                title
              }
            }
          }
        }
      `}
      render={data => (
        <Wrapper>
          <Text>© Copyright 2015 Firma van Eeden Rzn.</Text>
          <Menu>
            <li>
              <a href="#first-item">
                {data.menuOne.childMarkdownRemark.frontmatter.heading}
              </a>
            </li>
            <li>
              <a href="#second-item">
                {data.menuTwo.childMarkdownRemark.frontmatter.heading}
              </a>
            </li>
            <li>
              <a href="#contact-item">
                {data.menuThree.childMarkdownRemark.frontmatter.title}
              </a>
            </li>
          </Menu>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt=""
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
              zIndex: '-100',
            }}
          />
        </Wrapper>
      )}
    />
  )
}

export default Footer
