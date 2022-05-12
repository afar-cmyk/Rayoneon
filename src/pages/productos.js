import React from 'react'
import NavBar from '../components/navigation/NavBar'

export default function Productos() {
  return (
    <div>
      <NavBar estado={0} />
      <section>
        <p>
          Esta es la pagina <b>Productos</b>
        </p>
        <div>Neón</div>
        <div>Acrilico</div>
        <div>Electronicos</div>
      </section>
      <br />
    </div>
  )
}
