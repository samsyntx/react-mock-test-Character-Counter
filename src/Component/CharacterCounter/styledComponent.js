import styled from 'styled-components'

export const MainCharacterCounterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const YellowLeftSideContainer = styled.div`
  background-color: #ffc533;
  width: 50%;
  text-align: center;
  color: #0f172a;
  padding: 20px;
`

export const BlueRightSideContainer = styled.div`
  background-color: #0f172a;
  width: 50%;
  text-align: center;
  color: #ffc533;
  padding: 20px;
`

export const LeftSideMainHeading = styled.h1`
  background-color: #ffbf1f;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RightSideMainHeading = styled.h1`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputContainerCounter = styled.div`
  width: 100%;
  display: flex;
`

export const InputTypeText = styled.input`
  flex-grow: 1;
  border: none;
  margin-right: 10px;
  border-radius: 5px;
  outline: none;
  padding: 10px;
`

export const AddCounterButton = styled.button`
  height: 35px;
  width: 100px;
  background-color: #ffbf1f;
  border: none;
  border-radius: 5px;
  color: #0f172a;
  font-weight: bold;
`
