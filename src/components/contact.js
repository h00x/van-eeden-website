import React from 'react'
import styled, { css } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ContactBlock = () => {
  const ContentWrapper = styled.div`
    margin: 6rem 0;
    text-align: center;
    position: relative;
  `

  const Heading = styled.h2`
    box-shadow: -16px 48px 0px 0px rgba(250, 255, 244, 1);
    margin-bottom: 4rem;
  `

  const TopWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
  `

  const FormWrapper = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: top;
  `

  const ContactDataWrapper = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: top;
  `

  const Form = styled.form`
    width: 80%;
    margin: 0 auto;
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
      border-bottom: 2px solid #a668b2;
      + label {
        font-size: 75%;
        transform: translate3d(0, -30%, 0);
        opacity: 1;
      }
    }
  `

  const FormInput = styled.input`
    ${InputStyle}
  `

  const FormTextArea = styled.textarea`
    ${InputStyle}
  `

  const ContactData = styled.div`
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 80%;
    margin: 0 auto;
    text-align: left;
  `

  const ContactWrapper = styled.div`
    margin-top: -10rem;
    position: relative;
    z-index: 100;
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
        <ContentWrapper>
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
                  <button type="submit">Verstuur</button>
                </div>
              </Form>
            </FormWrapper>
            <ContactDataWrapper>
              <ContactData>
                <p>Text</p>
              </ContactData>
            </ContactDataWrapper>
          </ContactWrapper>
        </ContentWrapper>
      )}
    />
  )
}

export default ContactBlock
