import { styled } from 'styled-components';

export const CharacterCard = styled.div`
  width: auto;
  height: 50%;
  background: #444444;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  margin-right: 2rem;
  border-radius: 1rem;
`;

export const CharacterName = styled.h1`
  font-size: 1.5rem;
  color: #fff;
`;

export const AvatarContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #303030;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;