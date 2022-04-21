import React from 'react'
import NavBar from '../components/navigation/NavBar'

export default function Contacto() {
  return (
    <div>
      <NavBar estado={2} />
      <section className='pagina-contacto'>
        <div>
          <h1>¡Contactenos!</h1>
          <br />
          <h2>contacto@diluminar.com</h2>
          <p>
            para trabajar con nosotros, cotizaciones, materiales y diseños, con
            gusto le responderemos lo mas pronto posible!
          </p>
          <br />
          <h2>Bogotá D.C</h2>
          <ul>
            <li>Ak. 19 # 33a-36, Cundinamarca</li>
            <li>(+57) 310 881 55 44</li>
            <li>(601) 332 6290</li>
          </ul>
          <br />
          <h2>Redes sociales</h2>
          <p>
            Siguenos para conocer nuestras ultimas noticias, proyectos y
            promociones.
          </p>
        </div>
      </section>
    </div>
  )
}
