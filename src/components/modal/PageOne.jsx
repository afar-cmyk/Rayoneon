import React from 'react'
import Logo from '../../images/Logo'

const PageOne = () => {
  return (
    <>
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
                identificación que se adapte a las necesidades específicas de su
                empresa.
              </p>
            </li>
            <li>
              <h5>Nuestro equipo:</h5>
              <p>
                Diseñadores que realiza diseños exclusivos y novedosos para su
                establecimiento o empresa.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default PageOne
