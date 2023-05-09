import { Header } from './components/Header.tsx'
import { Info } from './components/Info.tsx'
import { NewTask } from './components/NewTask.tsx'
import { Tarefas } from './components/Tarefas.tsx'
import { GlobalStyle } from "./styles/themes/global"

export function App() {
  return (
    <>
      <Header />
      <NewTask />
      <Info />
      <Tarefas />
      <GlobalStyle />
    </>
  )
}

