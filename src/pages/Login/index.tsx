import {useEffect, useState, useContext} from 'react';
import { Container, Title, Subtitle, LoginContainer, Form, RegisterLink } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin() {
    const validations = email.trim() === '' || password.trim() === '';

    if(validations) {
      console.log('Preencha todos os campos');
      return;
    }

    signIn({
      email,
      password
    });

    setEmail('');
    setPassword('');
    navigate('/campaigns');
  }


  return (
    <Container>
      <Title>RPG App</Title>
      <Subtitle>Seja bem vindo ao Rpg App</Subtitle>
      <LoginContainer>
        <Form>
          <Input onChange={text => setEmail(text.target.value)} type="email" placeholder="Digite seu email" />
          <Input onChange={text => setPassword(text.target.value)} type="password" placeholder="Digite sua senha" />
          <Button onClick={handleLogin} type="button">Entrar</Button>
        </Form>
        <Link to='/register'>
          <RegisterLink href="/register">Não tem uma conta? Cadastre-se</RegisterLink>
        </Link>
      </LoginContainer>
    </Container>
  );
}

export default Login;