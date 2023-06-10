import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 30%;
  background-color: #1f1f1f;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ModalClose = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  margin: 0 1rem;
  :hover {
    cursor: pointer;
  }
`;