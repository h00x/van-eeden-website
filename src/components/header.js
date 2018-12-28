import { StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Navigation = styled.nav`
  background-color: #ffffff;
  z-index: 100;
  position: absolute;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  height: 6rem;
  width: 100%;
  margin-top: 3rem;
  @media (max-width: 960px) {
    text-align: center;
  }
`

const LogoWrapper = styled.div`
  position: absolute;
  top: -3rem;
  left: 2rem;
  @media (max-width: 960px) {
    position: relative;
    top: -3rem;
    left: 0;
  }
`

const Menu = styled.ul`
  text-align: right;
  padding-right: 2rem;
  line-height: 6rem;
  margin: 0;
  & li {
    display: inline-block;
    font-size: 1rem;
    padding-left: 3rem;
    margin: 0;
    & a {
      color: #546341;
      transition: color 0.3s ease-in-out;
      &:hover {
        color: #99b27a;
      }
    }
  }
  @media (max-width: 960px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
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
      <Navigation>
        <LogoWrapper>
          <Img fixed={data.logo.childImageSharp.fixed} alt={siteTitle} />
        </LogoWrapper>
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
      </Navigation>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
