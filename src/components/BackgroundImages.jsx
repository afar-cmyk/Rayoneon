import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default function BackgroundImages({ children }) {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bck_img001.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )
  const imageData = desktop.childImageSharp.fluid
  return (
    <>
      <BackgroundImage
        Tag='section'
        // className={className}
        fluid={imageData}
        backgroundColor={`#040e18`}
        style={{ width: '100vw', height: '90.5vh' }}
      >
        {children}
      </BackgroundImage>
    </>
  )
}
