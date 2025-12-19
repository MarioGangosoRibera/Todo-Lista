/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { Header } from './components/header'
import { ListarTareas } from './components/ListarTareas'
import { getTareasGuardadas } from './helper/getTareasGuardadas'
import { getTareasCompletas } from './helper/getTareasCompletas'

function App() {

  const [tareas, setTareas] = useState(getTareasGuardadas())
  const [verCompletadas, setVerCompletadas] = useState(getTareasCompletas())
  
  useEffect(() => {
    localStorage.setItem('verCompletadas', verCompletadas.toString())
  }, [verCompletadas])

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])
  

  return (
    <>
      <div className='contenedor'>
        <Header verCompletadas={verCompletadas} setVerCompletadas={setVerCompletadas}/>
        <Formulario tareas={tareas} setTareas={setTareas}/>
        <ListarTareas tareas={tareas} setTareas={setTareas} verCompletadas={verCompletadas}/>
      </div>
    </>
  )
}

export default App
