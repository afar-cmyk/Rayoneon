import React from 'react'
import { Button } from '@mui/material'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined
} from '@mui/icons-material'
import Logo from '../../images/Logo'

const ModalPrueba = () => {
  return (
    <>
      <section className='seccion-principal'>
        <div className='modal-canvas'>
          <BotonCerrar />
          <ContenedorNavegacion />
          <div className='modal-envoltura-contenido'>
            <section className='pagina-uno'>
              <Logo elemento='completo' style={{ width: '25vw' }} />
              <div style={{ gap: '15px' }}>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'grid',
                    gap: '40px',
                    margin: 0,
                    padding: 0
                  }}
                >
                  <li>
                    <h5>Nuestra misión:</h5>
                    <p>
                      Proporcionar a nuestros clientes material publicitario y
                      servicios de la más alta calidad y el mayor valor posible.
                    </p>
                  </li>
                  <li>
                    <h5>Nosotros podemos:</h5>
                    <p>
                      Diseñar, fabricar, instalar y mantener un paquete de
                      identificación que se adapte a las necesidades específicas
                      de su empresa.
                    </p>
                  </li>
                  <li>
                    <h5>Nuestro equipo:</h5>
                    <p>
                      Diseñadores que realiza diseños exclusivos y novedosos
                      para su establecimiento o empresa.
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default ModalPrueba

const ContenedorNavegacion = () => {
  return (
    <div
      className='navegacion-modal'
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '50%'
      }}
    >
      <Button
        aria-label='anterior pagina'
        component='button'
        className='flecha-izquierda'
      >
        <ArrowLeftOutlined sx={{ ...botonesNavegacion }} />
      </Button>
      <Button
        aria-label='siguiente pagina'
        component='button'
        className='flecha-derecha'
      >
        <ArrowRightOutlined sx={{ ...botonesNavegacion }} />
      </Button>
    </div>
  )
}

const botonesNavegacion = {
  color: '#45c6e9',
  fontSize: '4.5rem',
  height: '2em'
}

const BotonCerrar = () => {
  const botonCerrar = {
    color: '#f2f2f2',
    fontSize: '2rem'
  }
  return (
    <>
      <div
        className='btn-cerrar'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'flex-end',
          position: 'absolute',
          top: 0,
          right: 0
        }}
      >
        <Button
          aria-label='cerrar ventana'
          component='span'
          sx={{ minWidth: '55px', width: '45px' }}
        >
          <CloseOutlined sx={{ ...botonCerrar }} />
        </Button>
      </div>
    </>
  )
}
