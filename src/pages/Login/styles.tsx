import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  color: #d1d1d1;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const LoginContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RegisterLink = styled.a`
  color: #d1d1d1;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  `;