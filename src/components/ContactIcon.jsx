import React from 'react'
import iconoWhatsapp from '../images/whatsapp.svg'
import '../styles/global.css'

const ContactIcon = () => {
  return (
    <div className='icono-contacto'>
      <img
        width='48px'
        id='icono-svg'
        alt='Logo whatsapp'
        src={iconoWhatsapp}
      />
      <p>¡Contactenos!</p>
    </div>
  )
}

export default ContactIcon
