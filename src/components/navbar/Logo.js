import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Link to="/">
      <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
    </Link>
  )
}

export default Logo
