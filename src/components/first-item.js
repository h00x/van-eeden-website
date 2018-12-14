import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const FirstItem = () => (
  <StaticQuery
    query={graphql`
      query FirstContentBlock {
        allStrapiContentblocks {
          edges {
            node {
              Title
              Content
              Button
              Button_text
              Button_link
              Position
            }
          }
        }
      }
    `}
    return={data => <h2>test</h2>}
  />
)

export default FirstItem
