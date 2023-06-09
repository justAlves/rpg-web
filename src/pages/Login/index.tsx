import { Container, Title, Subtitle, LoginContainer, Form, RegisterLink } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container>
      <Title>RPG App</Title>
      <Subtitle>Seja bem vindo ao Rpg App</Subtitle>
      <LoginContainer>
        <Form>
          <Input type="email" placeholder="Digite seu email" />
          <Input type="password" placeholder="Digite sua senha" />
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to='/register'>
          <RegisterLink href="/register">Não tem uma conta? Cadastre-se</RegisterLink>
        </Link>
      </LoginContainer>
    </Container>
  );
}

export default Login;