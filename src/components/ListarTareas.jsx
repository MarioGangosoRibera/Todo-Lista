import { Tareas } from "./Tareas"

export const ListarTareas = ({tareas, setTareas}) => {

  const tareaCompletada = (id) => {
    setTareas(tareas.map((tarea) => {
      if(tarea.id == id) {
        return {...tarea, completada : !tarea.completada}
    }
    return tarea
    }))
  }

  return (
    <ul className="lista-tareas">
        {
            tareas.length > 0 ? tareas.map((tarea) => {
                return <Tareas
                        key={tarea.id}
                        tarea={tarea} 
                        tareaCompletada={tareaCompletada}
                      />
            }) : <div className="lista-tareas__mensaje">No hay tareas pendientes</div>
        }
    </ul>
  )
}
