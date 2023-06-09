import { useContext, useState } from  'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

import { Container, Form, RegisterLink, Title } from '../Login/styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { LoginContainer } from '../Login/styles';

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassowrd, setConfirmPassword] = useState('');

  const { signUp } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleSignUp() {

    const validations = name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassowrd.trim() === '';

    if(validations) {
      console.log('Preencha todos os campos');
      return;
    }

    if(password !== confirmPassowrd) {
      console.log('As senhas não coincidem');
      return;
    }

    signUp({
      name,
      email,
      password
    });
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    navigate('/login');
  }

  return (
    <Container>
      <Title>Registrar</Title>
      <LoginContainer>
        <Form>
          <Input onChange={text => setName(text.target.value)} type="text" placeholder='Digite seu nome' />
          <Input onChange={text => setEmail(text.target.value)} type="email" placeholder='Digite seu e-mail' />
          <Input onChange={text => setPassword(text.target.value)} type="password" placeholder='Digite sua senha' />
          <Input onChange={text => setConfirmPassword(text.target.value)} type="password" placeholder='Confirme sua senha' />
          <Button onClick={handleSignUp} type="button">Registrar</Button>
        </Form>
        <Link to='/login'>
          <RegisterLink>Já tem uma conta? Entre</RegisterLink>
        </Link>
      </LoginContainer>
    </Container>
  );
}

export default Register;