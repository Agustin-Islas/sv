import { useState } from 'react'
import './App.css'
import JSConfetti from 'js-confetti'

function App() {
  const [aceptado, setAceptado] = useState(false)
  const [rechazado, setRechazado] = useState(false)

  //mostrar mensaje de agradecimiento
  const handleYes = () => { 
    setAceptado(true)
    const jsConfetti = new JSConfetti ()
    jsConfetti.addConfetti ()
  }

  //reubicar boton NoBtn en la pantalla
  const repositionBtn = () => {
    setRechazado(true)
    const btn = document.querySelector('.NoBtn')
    btn.style.left = `${Math.floor(Math.random() * 100)}%`
    btn.style.top = `${Math.floor(Math.random() * 100)}%`
   }

  return (
    <>
      {aceptado ? 
      <>
        <section className='sectionAcept'>
          <img className='gifAcept' src="src/Utils/gato1.gif" alt="un gato" />
          <img className='gifAcept' src="src/Utils/ratasLove.gif" alt="una rata" />
          <img className='gifAcept' src="src/Utils/gato2.gif" alt="otra rata" />
        </section>
      </>
      :
      <>
        {!rechazado ?
        <img className='gifIndex' src="src/Utils/gatoPidiendoComida.gif" alt="gato pidiendo comida" />
        :
        <img className='gifReject' src="src/Utils/gatoPegando.gif" alt="gato pegando" />
        }
        <h1>¿Querés ir a merendar en San Valentín?</h1>  
        <button onClick={handleYes} className='SiBtn'>Si</button>
        <button onClick={repositionBtn} className='NoBtn'>No</button>
      </>
    }
    </>
  )
}

export default App
