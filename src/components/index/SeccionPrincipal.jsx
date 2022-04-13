import React from 'react'
import Logo from '../../images/Logo'

const SeccionPrincipal = () => {
  return (
    <>
      <section className='seccion-principal'>
        <Logo elemento='completo' />
        <div className='contenido-principal'>
          <h1>Avisos de Neón</h1>
          <p>
            Somos una empresa <strong>100% colombiana</strong>, dedicada a la{' '}
            <strong>fabricación de material publicitario</strong>
            {' ('}neón, avisos en acrílico, letras 3D, material p.o.p{').'}
          </p>
          <br />
          <p>
            Nuestra razón de ser es proporcionarle un servicio puntual y de{' '}
            <strong>excelente calidad</strong> siempre a tiempo y en el lugar
            donde nos indique.
          </p>
        </div>
      </section>
    </>
  )
}

export default SeccionPrincipal
