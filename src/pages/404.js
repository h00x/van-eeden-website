import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({ data }) => (
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
    <div style={{ textAlign: 'center' }}>
      <Img
        fixed={data.logo.childImageSharp.fixed}
        alt={data.site.siteMetadata.title}
      />
      <h1>404 Pagina niet gevonden.</h1>
      <Link to="/">Ga naar de Homepage</Link>
    </div>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
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
`

NotFoundPage.propTypes = {
  data: PropTypes.object,
}
