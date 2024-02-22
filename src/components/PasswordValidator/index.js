// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  Paragraph,
  InputContainer,
  LabelTxt,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    const passwordLength = event.target.value
    setPassword(passwordLength)
  }

  return (
    <AppContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputContainer
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <LabelTxt>
          {password.length >= 8
            ? ''
            : 'Your password must be at least 8 characters'}
        </LabelTxt>
      </CardContainer>
    </AppContainer>
  )
}

export default PasswordValidator
