import React from 'react'
import { Box } from '@mui/material'
import NavBar from '../components/navigation/NavBar'
import '../styles/global.css'
// import BackgroundImages from '../components/BackgroundImages.jsx'
import BackgroundSlider from 'react-background-slider'
import imagen1 from '../images/bck_img001.png'
import imagen2 from '../images/bck_img002.jpg'
import imagen3 from '../images/bck_img003.jpg'

export default function index() {
  return (
    <>
      <NavBar estado={null} />
      {/* <BackgroundImages>
        <h1>diluminar</h1>
        <h2>Avisos de Neón</h2>
        <p>
          Somos una empresa <b>100% colombiana</b>, dedicada a la
          <b>fabricación de material publicitario</b> (neón, avisos en acrílico,
          letras 3D, material p.o.p) Nuestra razón de ser es proporcionarle un
          servicio puntual y de <b>excelente calidad</b> siempre a tiempo y en
          el lugar donde nos indique.
        </p>
      </BackgroundImages> */}
      <Box
        component='div'
        style={{
          background:
            'linear-gradient(270deg, #041426d5 7.34%, #192940d5 80.71%)',
          height: '100vh'
        }}
      >
        <h1>diluminar</h1>
        <h2>Avisos de Neón</h2>
        <p>
          Somos una empresa <b>100% colombiana</b>, dedicada a la
          <b>fabricación de material publicitario</b> (neón, avisos en acrílico,
          letras 3D, material p.o.p) Nuestra razón de ser es proporcionarle un
          servicio puntual y de <b>excelente calidad</b> siempre a tiempo y en
          el lugar donde nos indique.
        </p>
      </Box>

      <BackgroundSlider
        style={{
          background:
            'linear-gradient(270deg, #041426d5 7.34%, #192940d5 80.71%)',
          height: '100vh'
        }}
        images={[imagen1, imagen2, imagen3]}
        duration={5}
        transition={1}
      />
    </>
  )
}
