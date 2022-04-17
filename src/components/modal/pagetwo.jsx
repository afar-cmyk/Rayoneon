import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

const PageTwo = () => {
  const { imagenFondo } = useStaticQuery(
    graphql`
      query {
        imagenFondo: file(relativePath: { eq: "bck_img001.png" }) {
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

  return (
    <>
      <section className='pagina-dos'>
        <div style={{ gap: '15px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 30
            }}
          >
            <div
              style={{
                width: '20vw',
                height: '45vh',
                backgroundColor: 'blue',
                borderRadius: '6px'
              }}
            />
            <div
              style={{
                width: '20vw',
                height: '45vh',
                backgroundColor: 'blue',
                borderRadius: '6px'
              }}
            >
              <GatsbyImage
                image={image}
                alt='Persona trabajando con luces de neón'
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <p style={{ width: '37vw', marginBottom: 0, marginTop: '15px' }}>
              Nuestro personal cuenta con la <strong>experiencia</strong> en la
              fabricación e instalación de todos nuestros productos con la mayor
              <strong> profesionalidad</strong> y <strong>puntualidad</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageTwo
