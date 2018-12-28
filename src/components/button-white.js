import React from 'react'
import styled from 'styled-components'

const LinkButton = styled.a`
  background-color: white;
  color: #a668b2;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  border: 2px solid white;
  display: inline-block;
  &:hover {
    opacity: 0.8;
    color: white;
    background: none;
    border: 2px solid white;
  }
`

const ButtonWhite = ({ children, to }) => (
  <LinkButton href={to}>{children}</LinkButton>
)

export default ButtonWhite
