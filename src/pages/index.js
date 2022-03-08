import React from 'react'
import NavBar from '../components/navigation/NavBar'
import FondoIndex from '../components/FondoIndex'
import '../styles/global.css'

export default function index() {
  return (
    <>
      <NavBar estado={null} />
      <FondoIndex>
        <div className='titulo-principal'>
          <h1>diluminar</h1>
        </div>
        <div className='contenido-indice'>
          <h2>Avisos de Neón</h2>
          <p>
            Somos una empresa <b>100% colombiana</b>, dedicada a la{' '}
            <b>fabricación de material publicitario</b>
            {' ('}neón, avisos en acrílico, letras 3D, material p.o.p{') '}
            Nuestra razón de ser es proporcionarle un servicio puntual y de{' '}
            <b>excelente calidad</b> siempre a tiempo y en el lugar donde nos
            indique.
          </p>
        </div>
      </FondoIndex>
    </>
  )
}
