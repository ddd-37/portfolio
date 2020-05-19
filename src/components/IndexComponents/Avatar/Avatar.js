import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "avatar" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      style={{ display: "block", margin: "0 auto" }}
      alt="Avatar"
    />
  )
}

export default Avatar
