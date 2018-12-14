import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const LinkButton = styled(Link)`
  background-color: white;
  color: rebeccapurple;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;
  border: 0;
  &:hover {
    opacity: 0.8;
  }
`

const ButtonWhite = ({ children }) => <LinkButton to="/">{children}</LinkButton>

export default ButtonWhite
