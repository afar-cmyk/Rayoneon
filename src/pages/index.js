import React from 'react'
import { Box } from '@mui/material'
import NavBar from '../components/navigation/NavBar'
import '../styles/global.css'
import BackgroundImages from '../components/BackgroundImages.jsx'

export default function index() {
  return (
    <div>
      <NavBar estado={null} />
      <Box component='div'>
        <h1>diluminar</h1>
        <h2>Avisos de Neón</h2>
        <p>
          Somos una empresa <b>100% colombiana</b>, dedicada a la
          <b>fabricación de material publicitario</b> (neón, avisos en acrílico,
          letras 3D, material p.o.p) Nuestra razón de ser es proporcionarle un
          servicio puntual y de <b>excelente calidad</b> siempre a tiempo y en
          el lugar donde nos indique.
        </p>
        <BackgroundImages />
      </Box>
    </div>
  )
}
