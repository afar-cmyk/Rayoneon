import React from 'react'
// import iconoWhatsapp from '../images/whatsapp.svg'
import InlineSVG from './InlineSVG'
import '../styles/global.css'

const ContactIcon = () => {
  return (
    <div className='icono-contacto'>
      <InlineSVG icono='whatsapp' tamaño='48' />
      <p>¡Contactenos!</p>
    </div>
  )
}

export default ContactIcon
