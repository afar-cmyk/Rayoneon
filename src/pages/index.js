import React from 'react'
import NavBar from '../components/navigation/NavBar'
import FondoIndex from '../components/FondoIndex'
import '../styles/global.css'
import Button from '@mui/material/Button'
import ContactIcon from '../components/ContactIcon.jsx'

export default function index() {
  return (
    <>
      <NavBar estado={null} />
      <main id='contenedor-padre'>
        <SeccionPrincipal />
        <SeccionInferior />
        <SeccionServicios />
        <ContactIcon />
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
        <h3>¡Puede contar con nuestros servicios!</h3>
        <p className='contenido-inferior'>
          Todo el <strong>material</strong> utilizado en nuestra producción es
          <strong> Importado</strong> de los EEUU y homologados por las {''}
          <a
            href='https://www.egl-lighting.com/'
            hrefLang='en'
            rel='noreferrer'
            target='_blank'
          >
            <strong>normas Internacionales</strong>
          </a>
          .
        </p>
        <Button variant='outlined' color='primary' sx={{ ...botonMUI }}>
          Acerca de nosotros
        </Button>
      </section>
    </>
  )
}

const SeccionServicios = () => {
  return (
    <>
      <section id='seccion-servicios'>
        <div className='contenedor-servicios-iconos'>
          <div className='cuadro-servicio-icono'>uno</div>
          <div className='cuadro-servicio-icono'>dos</div>
          <div className='cuadro-servicio-icono'>tres</div>
          <div className='cuadro-servicio-icono'>cuatro</div>
        </div>
        <div className='contenedor-servicios-texto'>
          <div className='cuadro-servicio'>
            <p>
              Atención <strong>personalizada</strong> por vía telefónica.
            </p>
          </div>
          <div className='cuadro-servicio'>
            <p>
              Garantía de entrega a <strong>tiempo</strong>.
            </p>
          </div>
          <div className='cuadro-servicio'>
            <p>
              <strong>Envío</strong> e instalación a nivel{' '}
              <strong>nacional</strong>.
            </p>
          </div>
          <div className='cuadro-servicio'>
            <div className='envoltura-servicios'>
              <p>
                Envoltura impermeable y<br />
                <strong>a prueba de golpes. *</strong>
              </p>
              <sub>
                {'('}impactos ligeros durante el transporte{').'}
              </sub>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

let botonMUI = {
  fontFamily: 'Assistant',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  color: '#cccccc',
  textTransform: 'initial',
  border: '3px solid rgba(175, 6, 159, 0.7)',
  boxSizing: 'border-box',
  borderRadius: '4px',
  '&:hover': {
    color: '#F2F2F2',
    border: '3px solid #AF069F',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 7px 4px rgba(175, 40, 162, 0.25)',
    borderRadius: '4px'
  }
}
