import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'

const ImageGallery = () => (
  <StaticQuery
    query={graphql`
      query ImageGallery {
        file(relativePath: { eq: "image-slide.md" }) {
          childMarkdownRemark {
            frontmatter {
              images {
                alt
                image_list_item {
                  childImageSharp {
                    fixed(height: 256, quality: 80) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const settings = {
        className: 'slider variable-width',
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        draggable: true,
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
      }

      return (
        <Slider {...settings}>
          {data.file.childMarkdownRemark.frontmatter.images.map(
            (image, index) => (
              <div key={index}>
                <Img
                  fixed={image.image_list_item.childImageSharp.fixed}
                  alt={image.alt}
                />
              </div>
            )
          )}
        </Slider>
      )
    }}
  />
)

export default ImageGallery
