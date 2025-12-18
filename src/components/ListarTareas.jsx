import { Tareas } from "./Tareas"

export const ListarTareas = ({tareas}) => {
  return (
    <ul className="lista-tareas">
        {
            tareas.length > 0 ? tareas.map((tarea) => {
                return <Tareas key={tarea.id} tarea={tarea}/>
            }) : <div className="lista-tareas__mensaje">No hay tareas pendientes</div>
        }
    </ul>
  )
}
