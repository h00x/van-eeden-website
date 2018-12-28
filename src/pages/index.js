import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeaderImage from '../components/header-image'
import FirstItem from '../components/first-item'
import ImageGallery from '../components/image-gallery'
import SecondItem from '../components/second-item'
import ContactBlock from '../components/contact'
import Footer from '../components/footer'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

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
    <FirstItem />
    <ImageGallery />
    <SecondItem />
    <ContactBlock />
    <Footer />
  </Layout>
)

export default IndexPage
