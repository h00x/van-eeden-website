import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => {
  const ContentWrapper = styled.div`
    text-align: center;
  `

  return (
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "van-eeden-logo.png" }) {
            childImageSharp {
              fixed(width: 229) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <SEO
            title="Pagina bestaat niet"
            keywords={[
              'hyacinten',
              'kweekers',
              'bollenstreek',
              'noordwijkerhout',
              'van eeden',
              'hyacint met bol',
            ]}
          />
          <ContentWrapper>
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt={data.site.siteMetadata.title}
            />
            <h1>404 Pagina niet gevonden</h1>
            <Link to="/">Ga naar de Homepage</Link>
          </ContentWrapper>
        </Layout>
      )}
    />
  )
}

export default NotFoundPage
