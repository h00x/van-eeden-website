import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeaderImage from '../components/header-image'
import ProductItem from '../components/first-item'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'hyacinten',
        'kweekers',
        'bollenstreek',
        'noordwijkerhout',
        'van eeden',
        'hyacint met bol',
      ]}
    />
    <HeaderImage />
    <ProductItem />
  </Layout>
)

export default IndexPage
