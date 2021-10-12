import styled from 'styled-components/macro'

function InputTask() {
  return (
    <InputWrapper>
      <InputNewTask type="text" />
      <Button>Eintragen</Button>
    </InputWrapper>
  )
}

export default InputTask

const InputNewTask = styled.input`
  width: 250px;
  height: 40px;
  margin-top: 10px;
  border: none;
  box-shadow: inset 0 0 4px 2px rgba(46, 49, 49, 1);
  border-radius: 15px;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const Button = styled.button`
  border: none;
  font-size: 20px;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`
