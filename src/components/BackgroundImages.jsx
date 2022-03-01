import React from 'react'
import { Box } from '@mui/material'
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
      <Box>
        {children}
        <BackgroundImage
          Tag='section'
          fluid={imageData}
          backgroundColor={
            'linear-gradient(270deg, #041426 7.34%, #192940 80.71%)'
          }
          preserveStackingContext
          style={{ width: '100vw', height: '90.5vh', opacity: '0.2' }}
        >
          <p>aaaaaaaa</p>
        </BackgroundImage>
      </Box>
    </>
  )
}
