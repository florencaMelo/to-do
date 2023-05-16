import { useState } from 'react'
import { Header } from './components/Header.tsx'
import { Info } from './components/Info.tsx'
import { NewTask } from './components/NewTask.tsx'
import { Tarefas } from './components/Tarefas.tsx'
import { GlobalStyle } from "./styles/themes/global"

export function App() {
  const [tasks, setTasks] = useState<string[]>([])

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

