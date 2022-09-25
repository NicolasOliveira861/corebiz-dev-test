import { Action } from '@remix-run/router';
import { useState } from 'react';
import {
  Container,
  Form,
  Input,
  Title,
  SignButton,
  ErrorMsg,
  InputContainer,
} from './styles';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [activateMessages, setActivateMessages] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameError && !emailError) {
      console.log('submitted!');
    } else {
      setActivateMessages(true);
    }
  };

  const emailValidation = (email: string) => {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    const validEmail = new RegExp(emailRegex);

    const isValid = validEmail.test(email);

    if (!isValid) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const nameValidation = (name: string) => {
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'name':
        nameValidation(value);
        setName(value);
        break;

      case 'email':
        emailValidation(value);
        setEmail(value);
        break;
    }
  };

  return (
    <Container>
      <Title>Participe de nossas news com promoções e novidades!</Title>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <InputContainer>
          <Input
            type="text"
            placeholder="Digite seu nome"
            name="name"
            onChange={(e) => handleInputChange(e)}
            className={nameError && activateMessages ? 'error' : ''}
          />

          {nameError && activateMessages ? (
            <ErrorMsg>Preencha com seu nome completo</ErrorMsg>
          ) : (
            <></>
          )}
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="Digite seu email"
            name="email"
            className={emailError && activateMessages ? 'error' : ''}
            onChange={(e) => handleInputChange(e)}
          />

          {emailError && activateMessages ? (
            <ErrorMsg>Preencha com um e-mail válido</ErrorMsg>
          ) : (
            <></>
          )}
        </InputContainer>

        <SignButton type="submit">Eu quero!</SignButton>
      </Form>
    </Container>
  );
};

export default Newsletter;
