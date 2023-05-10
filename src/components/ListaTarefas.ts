import styled from "styled-components";

export const ListaTarefasContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

`

export const InputStyle = styled.input`
  appearance: none;
  border: 1px solid #4EA8DE;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  cursor: pointer;

  :checked{
    background-color: #8284FA;
  }
`

export const Img = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`