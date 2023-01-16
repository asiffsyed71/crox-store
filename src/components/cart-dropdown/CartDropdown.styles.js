import styled from "styled-components";



export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 50;
  cursor: pointer;

  &:focus {
    outline: 10px solid red ;
  }

  button {
    width: 100%;
    height: 40px;
    line-height: 40px;
    &:nth-child(1) {
      margin-bottom: 10px;
    }
  }
`

export const EmptyCartMessage = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: auto;
`

export const ButtonContainer = styled.div`
margin-top: 10px;
`

export const CartItemsContainer = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow-y: scroll;
`