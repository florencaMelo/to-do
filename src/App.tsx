import { useState } from 'react'
import { Header } from './components/Header.tsx'
import { Info } from './components/Info.tsx'
import { NewTask } from './components/NewTask.tsx'
import { Tarefas } from './components/Tarefas.tsx'
import { GlobalStyle } from "./styles/themes/global"


interface Task {
  taskText: string
  completed: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  // foi passada essa função aqui pois todos os outros componentes necessitam de ter o tasks como property

  return (
    <>
      <Header />
      <NewTask tasks={tasks} setTasks={setTasks}/>
      <Info tasks={tasks} />
      <Tarefas tasks={tasks} setTasks={setTasks}/>
      <GlobalStyle />
    </>
  )
}

