import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

const PageTwo = () => {
  const { imagenUno, imagenDos } = useStaticQuery(
    graphql`
      query {
        imagenUno: file(relativePath: { eq: "modal/modal001.webp" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        imagenDos: file(relativePath: { eq: "modal/modal002.webp" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    `
  )
  const image001 = getImage(imagenUno)
  const image002 = getImage(imagenDos)

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
            <div>
              <GatsbyImage
                image={image001}
                alt='Hombre doblando tubos de neón'
                style={{ width: '20vw', height: '45vh' }}
                imgStyle={{ borderRadius: '6px' }}
              />
            </div>
            <div>
              <GatsbyImage
                image={image002}
                alt='Persona sosteniendo una letra n de neón'
                style={{ width: '20vw', height: '45vh' }}
                imgStyle={{ borderRadius: '6px' }}
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
