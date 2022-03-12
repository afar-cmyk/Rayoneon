import React from 'react'
// import iconoWhatsapp from '../images/whatsapp.svg'
import InlineSVG from './InlineSVG'
import '../styles/global.css'

const ContactIcon = () => {
  return (
    <div className='icono-contacto'>
      <InlineSVG icono='whatsapp' tamaño='48' />
      {/* <img
        width='48px'
        id='icono-svg'
        alt='Logo whatsapp'
        src={iconoWhatsapp}
      /> */}
      <p>¡Contactenos!</p>
    </div>
  )
}

export default ContactIcon
