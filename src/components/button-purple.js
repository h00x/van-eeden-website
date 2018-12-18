import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const LinkButton = styled(Link)`
  background-image: linear-gradient(135deg, #cb88d7 0%, #a668b2 100%);
  background-color: #a668b2;
  color: #ffffff;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;
  border: 0;
  display: inline-block;
  &:hover {
    opacity: 0.8;
  }
`

const ButtonWhite = ({ children, to }) => (
  <LinkButton to={to}>{children}</LinkButton>
)

export default ButtonWhite
