import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const BetweenBlock = () => {
  const Wrapper = styled.div`
    overflow: hidden;
    position: relative;
    padding: 4rem;
    width: 100%;
    text-align: center;
    & h3 {
      margin: 0;
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
        }
      `}
      render={data => (
        <Wrapper>
          <h3>Test</h3>
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

export default BetweenBlock
