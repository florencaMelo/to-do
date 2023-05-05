import { Header } from './Header.tsx'
import { NewTask } from './NewTask.tsx'
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

