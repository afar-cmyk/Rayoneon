import React from 'react'
import NavBar from '../components/navigation/NavBar'

export default function Contacto() {
  return (
    <div>
      <NavBar estado={2} />
      <section className='pagina-contacto'>
        <p>
          Esta es la pagina <b>Contacto</b>
        </p>
      </section>
    </div>
  )
}
