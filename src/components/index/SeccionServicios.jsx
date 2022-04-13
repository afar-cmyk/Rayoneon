import React from 'react'
import {
  SupportAgentOutlined,
  AccessTimeOutlined,
  LocalShippingOutlined,
  GppGoodOutlined
} from '@mui/icons-material'
import ModalMain from '../modal/ModalMain'
import { ModalProvider } from '../modal/ModalContext'

const SeccionServicios = () => {
  return (
    <section className='seccion-servicios'>
      <ServciosTexto />
      <ServiciosIconos />
    </section>
  )
}

export default SeccionServicios

const ServciosTexto = () => {
  return (
    <>
      <section id='servicios-texto'>
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
        <ModalProvider>
          <ModalMain />
        </ModalProvider>
      </section>
    </>
  )
}

const ServiciosIconos = () => {
  return (
    <>
      <section id='servicios-iconos'>
        <div className='contenedor-servicios-iconos'>
          <div className='cuadro-servicio-icono'>
            <SupportAgentOutlined sx={{ ...iconoMUI }} />
          </div>
          <div className='cuadro-servicio-icono'>
            <AccessTimeOutlined sx={{ ...iconoMUI }} />
          </div>
          <div className='cuadro-servicio-icono'>
            <LocalShippingOutlined sx={{ ...iconoMUI }} />
          </div>
          <div className='cuadro-servicio-icono'>
            <GppGoodOutlined sx={{ ...iconoMUI }} />
          </div>
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

let iconoMUI = {
  fontSize: 60,
  color: '#f2f2f2'
}
