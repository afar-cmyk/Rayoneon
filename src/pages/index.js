import React from 'react'
import NavBar from '../components/navigation/NavBar'
import '../styles/global.css'

export default function index() {
  return (
    <div>
      <NavBar estado={null} />
      <br />
      <p>
        <h1>diluminar</h1>
        <h2>Avisos de Neón</h2>
        <p>
          Somos una empresa <b>100% colombiana</b>, dedicada a la
          <b>fabricación de material publicitario</b> (neón, avisos en acrílico,
          letras 3D, material p.o.p) Nuestra razón de ser es proporcionarle un
          servicio puntual y de <b>excelente calidad</b> siempre a tiempo y en
          el lugar donde nos indique.
        </p>
      </p>
    </div>
  )
}
