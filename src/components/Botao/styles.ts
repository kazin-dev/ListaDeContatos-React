import styled from 'styled-components'

export const BotaoAdicionar = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: darkgreen;
  }

  &:focus {
    outline: none;
    box-shadow:  0 0 0 3px rgba(0, 128, 0, 0.5);
`
export const BotaoRemover = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: darkred;
  }

  &:focus {
    outline: none;
    box-shadow:  0 0 0 3px rgba(128, 0, 0, 0.5);
`

export const BotaoEditar = styled.button`
background-color: blue;
color: white;
border: none;
padding: 10px 20px;
font-size: 16px;
cursor: pointer;
border-radius: 5px;
margin: 10px;

&:hover {
  background-color: darkblue;
}

&:focus {
  outline: none;
  box-shadow:  0 0 0 3px rgba(0, 0, 128, .5);
`
