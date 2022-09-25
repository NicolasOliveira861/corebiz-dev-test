import { useState } from 'react';
import { Container, Form, Input, Title, SignButton } from './styles';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('submitted!');
  };

  return (
    <Container>
      <Title>Participe de nossas news com promoções e novidades!</Title>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="text"
          placeholder="Digite seu nome"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Digite seu email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <SignButton type="submit">Eu quero!</SignButton>
      </Form>
    </Container>
  );
};

export default Newsletter;
