import React from 'react'
import { Box } from '@mui/material'
import NavBar from '../components/navigation/NavBar'
import '../styles/global.css'
// import BackgroundImages from '../components/BackgroundImages.jsx'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function index() {
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
    <div>
      <NavBar estado={null} />
      <BackgroundImage
        Tag='section'
        // className={className}
        fluid={imageData}
        backgroundColor={`#040e18`}
        style={{ width: '100vw' }}
      >
        <Box component='div'>
          <h1>diluminar</h1>
          <h2>Avisos de Neón</h2>
          <p>
            Somos una empresa <b>100% colombiana</b>, dedicada a la
            <b>fabricación de material publicitario</b> (neón, avisos en
            acrílico, letras 3D, material p.o.p) Nuestra razón de ser es
            proporcionarle un servicio puntual y de <b>excelente calidad</b>{' '}
            siempre a tiempo y en el lugar donde nos indique.
          </p>
        </Box>
      </BackgroundImage>
    </div>
  )
}
