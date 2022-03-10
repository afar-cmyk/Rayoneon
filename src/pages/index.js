import React from 'react'
import NavBar from '../components/navigation/NavBar'
import FondoIndex from '../components/FondoIndex'
import '../styles/global.css'
import Button from '@mui/material/Button'

export default function index() {
  return (
    <>
      <NavBar estado={null} />
      <main id='contenedor-padre'>
        <SeccionPrincipal />
        <SeccionInferior />
      </main>
    </>
  )
}

const SeccionPrincipal = () => {
  return (
    <>
      <FondoIndex>
        <div className='titulo-principal'>
          <h1>diluminar</h1>
        </div>
        <div className='contenido-principal'>
          <h2>Avisos de Neón</h2>
          <p>
            Somos una empresa <strong>100% colombiana</strong>, dedicada a la{' '}
            <strong>fabricación de material publicitario</strong>
            {' ('}neón, avisos en acrílico, letras 3D, material p.o.p{') '}
            Nuestra razón de ser es proporcionarle un servicio puntual y de{' '}
            <strong>excelente calidad</strong> siempre a tiempo y en el lugar
            donde nos indique.
          </p>
        </div>
      </FondoIndex>
    </>
  )
}

const SeccionInferior = () => {
  return (
    <>
      <section id='seccion-inferior'>
        <h3>
          ¡Puede contar con
          <br />
          nuestros servicios!
        </h3>
        <p className='contenido-inferior'>
          Todo el <strong>material</strong> utilizado en nuestra producción es
          <strong> Importado</strong> de los EEUU y homologados por las {''}
          <a
            href='https://www.egl-lighting.com/'
            hreflang='en'
            rel='noreferrer'
            target='_blank'
          >
            <strong>normas Internacionales</strong>
          </a>
          .
        </p>
        <Button variant='outlined' color='primary' sx={{ ...botonMui }}>
          Acerca de nosotros
        </Button>
      </section>
    </>
  )
}

let botonMui = {
  fontFamily: 'Assistant',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  color: '#CCCCCC',
  textTransform: 'initial',
  border: '3px solid rgba(175, 6, 159, 0.7)',
  boxSizing: 'border-box',
  borderRadius: '4px'
}
