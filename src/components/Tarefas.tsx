import React from "react"
import { TarefasContainer } from "./Tarefas"
import Image from '../assets/Clipboard.svg'
import { ListaTarefas } from './ListaTarefas.tsx'


export function Tarefas({tasks}) {
  return(
    <div>
      {tasks.length > 0 ? <p>{tasks.map(tasks => {
        return <ListaTarefas taskText={tasks} /> })} </p> : (
        <TarefasContainer >
          <img src={Image} alt="" />
          <b>Você ainda não tem tarefas cadastradas</b>
          <p>Crie taerfas e organize seus itens a fazer</p>
        </TarefasContainer > 
      )}
    </div>
  )
}