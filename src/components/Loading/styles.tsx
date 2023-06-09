import { styled, keyframes } from 'styled-components';


const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 0.2rem solid #1f1f1f;
  border-top: 0.2rem solid #fff;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${spin} 0.5s linear infinite;
  margin: 0 auto;
`;