// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  background-size: cover;
  height: 100vh;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  align-items: center;
  background-color: #383a4e;
  padding: 36px;
  font-family: 'Roboto';
  box-shadow: 5px, 5px, 2px, #434451;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const Paragraph = styled.p`
  color: #f8fafc;
  font-size: 13px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-bottom: 2.5rem;
`
export const InputContainer = styled.input`
  border: 1px solid #383a4e;
  border-radius: 2px;
  background-color: #edeeff;
  height: 32px;
  max-width: 26rem;
  margin-bottom: 1rem;
`
export const LabelTxt = styled.p`
  color: #ef4444;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
`
