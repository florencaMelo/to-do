import React from "react"
import { TarefasContainer } from "./Tarefas"
import Image from '../assets/Clipboard.svg'
import { ListaTarefas } from './ListaTarefas.tsx'

interface TarefasProps {
  tasks: string[]
  setTasks: (newValue: string[]) => void
}

export function Tarefas({ tasks, setTasks }: TarefasProps) {
  function deleteTask(taskText: string) {
    const tasksWithoutDeleted = tasks.filter((task: string) => {
      return task != taskText
    })

    setTasks(tasksWithoutDeleted)
  }

  return(
    <div>
      {tasks.length > 0 ? <p>{tasks.map((task: string) => {
        return <ListaTarefas taskText={task} onDeleteTask={deleteTask}/> })} </p> : (
        <TarefasContainer >
          <img src={Image} alt="" />
          <b>Você ainda não tem tarefas cadastradas</b>
          <p>Crie taerfas e organize seus itens a fazer</p>
        </TarefasContainer > 
      )}
    </div>
  )
}