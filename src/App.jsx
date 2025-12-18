/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { Header } from './components/header'
import { ListarTareas } from './components/ListarTareas'

function App() {

  const initialState = [
    { id: 1, texto: 'Comprar pan', completada: false },
    { id: 2, texto: 'Llevar el coche al taller', completada: true },
    { id: 3, texto: 'Pagar la luz', completada: false },
  ]

  const [tareas, setTareas] = useState(initialState)

  return (
    <>
      <div className='contenedor'>
        <Header/>
        <Formulario tareas={tareas} setTareas={setTareas}/>
        <ListarTareas tareas={tareas}/>
      </div>
    </>
  )
}

export default App
