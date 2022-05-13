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
        <div style={{ ...cartas }}>Neón</div>
        <div style={{ ...cartas }}>Acrilico</div>
        <div style={{ ...cartas }}>Electronicos</div>
      </section>
      <br />
    </div>
  )
}

let cartas = {
  width: '250px',
  height: '600px',
  backgroundColor: 'white'
}
