import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import '../styles/backgroundImages.css'

const BackgroundImages = ({ children }) => {
  // const listaFondos = ['bck_img001.png', 'bck_img002.png', 'bck_img003.png']

  const { imagenFondo } = useStaticQuery(
    graphql`
      query {
        imagenFondo: file(relativePath: { eq: "bck_img003.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              webpOptions: { quality: 70 }
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )
  const image = getImage(imagenFondo)
  const fondoPantalla = convertToBgImage(image)
  return (
    <>
      <BackgroundImage
        Tag='section'
        {...fondoPantalla}
        preserveStackingContext
        className='mascarafondo'
      >
        <div className='envoltura-oscura'>{children}</div>
      </BackgroundImage>
    </>
  )
}

export default BackgroundImages
