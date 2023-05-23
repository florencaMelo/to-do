import styled from "styled-components";

export const ListaTarefasContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  border-radius: 8px;
  height: 4.5rem;
  width: 46rem;
  margin: 0 auto 2rem auto;
`

export const InputStyle = styled.input`
  appearance: none;
  border: 1px solid #4EA8DE;
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 1rem;

  :checked{
    background-color: #8284FA;
  }
`
export const Button = styled.button`
  
`