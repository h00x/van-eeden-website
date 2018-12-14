import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import ButtonWhite from './button-white'

const HeaderImage = () => (
  <StaticQuery
    query={graphql`
      query Header {
        allStrapiHeaders {
          edges {
            node {
              id
              Main_text
              Sub_text
              Button_text
              Buttton_link
              Backgroundimage {
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
    `}
    render={data => {
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

      return (
        <ImageWrapper>
          <TitleWrapper>
            <h3>{data.allStrapiHeaders.edges[0].node.Sub_text}</h3>
            <h1>{data.allStrapiHeaders.edges[0].node.Main_text}</h1>
            <ButtonWhite>
              {data.allStrapiHeaders.edges[0].node.Button_text}
            </ButtonWhite>
          </TitleWrapper>
          <Img
            fluid={
              data.allStrapiHeaders.edges[0].node.Backgroundimage
                .childImageSharp.fluid
            }
            alt="Some text"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
            }}
          />
        </ImageWrapper>
      )
    }}
  />
)

export default HeaderImage
