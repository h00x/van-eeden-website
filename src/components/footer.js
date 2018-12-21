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
  `

  const Text = styled.p`
    margin: 0;
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
        }
      `}
      render={data => (
        <Wrapper>
          <Text>© Copyright 2015 Firma van Eeden Rzn.</Text>
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
