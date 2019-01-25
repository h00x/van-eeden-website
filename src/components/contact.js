import React from 'react'
import styled, { css } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faMapMarkerAlt, faPhone)

const ContactBlock = () => {
  const ContentWrapper = styled.div`
    padding: 6rem 0;
    text-align: center;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
  `

  const Heading = styled.h2`
    margin-bottom: 4rem;
    display: inline-block;
    position: relative;
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      left: 3rem;
      top: 2rem;
      background-color: rgba(250, 255, 244, 1);
      position: absolute;
      z-index: -1;
      @media (max-width: 480px) {
        width: 80%;
        left: 1rem;
      }
    }
  `

  const TopWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    @media (max-width: 960px) {
      width: 100%;
    }
  `

  const FormWrapper = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: top;
    @media (max-width: 960px) {
      width: 100%;
    }
  `

  const ContactDataWrapper = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: top;
    @media (max-width: 960px) {
      width: 100%;
    }
  `

  const Form = styled.form`
    width: 80%;
    float: right;
    margin-right: 1rem;
    @media (max-width: 960px) {
      width: 90%;
      float: none;
      margin: 3rem auto;
    }
  `

  const FormGroup = styled.div`
    position: relative;
    margin-bottom: 1.5rem;
    text-align: left;
    & label {
      cursor: text;
    }
  `

  const FormLabel = styled.label`
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    position: absolute;
    top: 0;
    padding: 16px 0 0 13px;
    transition: all 200ms;
    opacity: 0.5;
  `

  const InputStyle = css`
    display: block;
    width: 100%;
    padding: 1rem 0.75rem 0.2rem 0.75rem;
    font-size: 1rem;
    line-height: 2;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    outline: none;
    border: 0;
    border-bottom: 2px solid #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transition: border 0.2s ease-in-out;
    &:focus,
    &:valid {
      + label {
        font-size: 75%;
        transform: translate3d(0, -30%, 0);
        opacity: 1;
      }
    }
    &:focus {
      border-bottom: 2px solid #a668b2;
    }
  `

  const FormInput = styled.input`
    ${InputStyle}
    height: 3.5rem;
  `

  const FormTextArea = styled.textarea`
    ${InputStyle}
    resize: none;
    height: 6.5rem;
  `

  const ContactData = styled.div`
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 80%;
    text-align: left;
    margin-left: 1rem;
    @media (max-width: 480px) {
      & td {
        display: block;
      }
    }
    @media (max-width: 960px) {
      width: 90%;
      margin: 0;
      margin: 0 auto;
    }
  `

  const ContactWrapper = styled.div`
    margin-top: -10rem;
    position: relative;
    z-index: 100;
  `
  const ContactButton = styled.button`
    background-image: linear-gradient(135deg, #cb88d7 0%, #a668b2 100%);
    background-color: #a668b2;
    color: #ffffff;
    padding: 1rem 2rem;
    text-decoration: none;
    transition: opacity 0.3s ease-in-out;
    border: 0;
    outline: 0;
    display: inline-block;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `

  const ContactTitle = styled.strong`
    margin-left: 1rem;
  `

  return (
    <StaticQuery
      query={graphql`
        query Contact {
          file(relativePath: { eq: "contact.md" }) {
            childMarkdownRemark {
              frontmatter {
                title
                buttontext
                email
                address
                phoneJaap
                phoneRutger
                image_src {
                  alt
                  image_link {
                    childImageSharp {
                      fluid(maxWidth: 1000, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
              rawMarkdownBody
            }
          }
        }
      `}
      render={data => (
        <ContentWrapper id="contact-item">
          <TopWrapper>
            <Heading>{data.file.childMarkdownRemark.frontmatter.title}</Heading>
            <Img
              fluid={
                data.file.childMarkdownRemark.frontmatter.image_src.image_link
                  .childImageSharp.fluid
              }
              alt={data.file.childMarkdownRemark.frontmatter.image_src.alt}
            />
          </TopWrapper>
          <ContactWrapper>
            <FormWrapper>
              <Form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/success/"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <FormGroup>
                  <FormInput type="text" name="name" id="name" required />
                  <FormLabel htmlFor="name">Naam</FormLabel>
                </FormGroup>
                <FormGroup>
                  <FormInput type="text" name="email" id="email" required />
                  <FormLabel htmlFor="email">E-mailadres</FormLabel>
                </FormGroup>
                <FormGroup>
                  <FormTextArea name="message" id="message" required />
                  <FormLabel htmlFor="message">Bericht</FormLabel>
                </FormGroup>
                <div>
                  <ContactButton type="submit">Verstuur</ContactButton>
                </div>
              </Form>
            </FormWrapper>
            <ContactDataWrapper>
              <ContactData>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon="envelope" />
                        <ContactTitle>Email</ContactTitle>
                      </td>
                      <td>
                        <a
                          href={`mailto:${
                            data.file.childMarkdownRemark.frontmatter.email
                          }`}
                        >
                          {data.file.childMarkdownRemark.frontmatter.email}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon="map-marker-alt" />
                        <ContactTitle>Adres</ContactTitle>
                      </td>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: `${data.file.childMarkdownRemark.frontmatter.address.replace(
                            /(?:\n)/g,
                            '<br />'
                          )}`,
                        }}
                      />
                    </tr>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon="phone" />
                        <ContactTitle>Tel</ContactTitle>
                      </td>
                      <td>
                        <a
                          href={`tel:${
                            data.file.childMarkdownRemark.frontmatter.phoneJaap
                          }`}
                        >
                          {data.file.childMarkdownRemark.frontmatter.phoneJaap}
                        </a>{' '}
                        Jaap van Eeden <br />
                        <a
                          href={`tel:${
                            data.file.childMarkdownRemark.frontmatter
                              .phoneRutger
                          }`}
                        >
                          {
                            data.file.childMarkdownRemark.frontmatter
                              .phoneRutger
                          }
                        </a>{' '}
                        Rutger van Eeden
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ContactData>
            </ContactDataWrapper>
          </ContactWrapper>
        </ContentWrapper>
      )}
    />
  )
}

export default ContactBlock
