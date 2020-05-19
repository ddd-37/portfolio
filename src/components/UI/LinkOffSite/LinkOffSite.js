import React from "react"

const LinkOffSite = ({ children, url }) => {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </>
  )
}

export default LinkOffSite
