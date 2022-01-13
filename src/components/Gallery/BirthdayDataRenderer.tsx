import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Gallery from "./Gallery"

const BrithdayDataRenderer = props => {
  const data = useStaticQuery(graphql`
query AllImagesQuery {
  allFile(
    filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/birthdays/"}}
  ) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
  `)
  return (
    <>
      <Gallery data={data}/>
    </>
  )
}

export default BrithdayDataRenderer
