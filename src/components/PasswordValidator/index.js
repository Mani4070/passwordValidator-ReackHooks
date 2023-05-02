// Write your code here
import {useState} from 'react'

import {
  Container,
  PasswordContainer,
  Heading,
  Paragraph,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showErrorMessage = password.length < 8

  const onChangePasswordValue = event => {
    setPassword(event.target.value)
  }

  return (
    <Container>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePasswordValue}
        />
        {showErrorMessage && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordContainer>
    </Container>
  )
}
export default PasswordValidator
