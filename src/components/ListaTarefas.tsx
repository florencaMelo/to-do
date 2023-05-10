import React from "react"
import { Img, InputStyle, ListaTarefasContainer } from "./ListaTarefas"
import Trash  from '../assets/trash.svg'

export function ListaTarefas({taskText}){

  return(
    <ListaTarefasContainer>
      <InputStyle type="checkbox" />
      <p>{taskText}</p>
      <Img src={Trash} alt="" />
    </ListaTarefasContainer>
  )
}