import { Header } from './components/Header.tsx'
import { NewTask } from './components/NewTask.tsx'
import { GlobalStyle } from "./styles/themes/global"

export function App() {
  return (
    <>
      <Header />
      <NewTask />
      <GlobalStyle />
    </>
  )
}

