import React from "react"
import { TarefasContainer } from "./Tarefas"
import Image from '../assets/Clipboard.svg'
import { ListaTarefas } from './ListaTarefas.tsx'


interface Task {
  taskText: string
  completed: boolean
}

interface TarefasProps {
  tasks: Task[]
  setTasks: (newValue: Task[]) => void
}

export function Tarefas({ tasks, setTasks }: TarefasProps) {
  function deleteTask(taskText: string) {
    const tasksWithoutDeleted = tasks.filter((task: Task) => {
      return task.taskText != taskText
    })

    setTasks(tasksWithoutDeleted)
  }

  return(
    <div>
      {tasks.length > 0 ? tasks.map((task: Task) => {
        return <ListaTarefas task={task} onDeleteTask={deleteTask}/> })  : (
        <TarefasContainer >
          <img src={Image} alt="" />
          <b>Você ainda não tem tarefas cadastradas</b>
          <p>Crie taerfas e organize seus itens a fazer</p>
        </TarefasContainer > 
      )}
    </div>
  )
}