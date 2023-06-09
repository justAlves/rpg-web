import React, { useEffect } from 'react';
import { Container } from '../Login/styles';
import Loading from '../../components/Loading';
import { useNavigate } from 'react-router-dom';

function AuthOrApp() {

  const navigate = useNavigate();

  useEffect(() => {
    function authOrApp(){
      const token = localStorage.getItem('@token');
      if(token) {
        navigate('/campaigns');
        console.log('Você está logado');
      } else {
        navigate('/login');
        console.log('Você não está logado');
      }
    }

    authOrApp();
  }, []);

  return (
    <Container>
      <Loading/>
    </Container>
  );
}

export default AuthOrApp;