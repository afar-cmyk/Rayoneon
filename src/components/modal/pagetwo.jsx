import React from 'react'

const pagetwo = () => {
  return (
    <>
      <section className='pagina-dos'>
        <div style={{ gap: '15px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 30
            }}
          >
            <div
              style={{
                width: '20vw',
                height: '45vh',
                backgroundColor: 'red',
                borderRadius: '6px'
              }}
            />
            <div
              style={{
                width: '20vw',
                height: '45vh',
                backgroundColor: 'red',
                borderRadius: '6px'
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <p style={{ width: '37vw', marginBottom: 0, marginTop: '30px' }}>
              Nuestro personal cuenta con la <strong>experiencia</strong> en la
              fabricación e instalación de todos nuestros productos con la mayor
              <strong> profesionalidad</strong> y <strong>puntualidad</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default pagetwo
