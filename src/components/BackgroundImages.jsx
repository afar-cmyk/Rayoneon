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

// CSS
// .mascarafondo {
//   width: 100%;
//   min-height: 100vh;
// }

// .envoltura-oscura {
//   background: linear-gradient(270deg, #041426d5 7.34%, #192940d5 80.71%);
//   height: 100vh;
// }

// .envoltura-oscura h1 {
//   margin: 0;
// }
