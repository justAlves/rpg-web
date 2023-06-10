import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Title } from '../Login/styles';
import api from '../../api';
import { CharacterCard } from './styles';
import { CampaignContainer } from '../CampaignSelect/styles';

interface Character {
  id: string;
  name: string;
  maxLife: number;
  maxSanity: number;
  currentLife: number;
  currentSanity: number;
}

function Characters() {

  const { campaign_id } = useParams();

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function loadCharacters() {
      const response = await api.get(`/character/campaign?campaign_id=${campaign_id}`);

      setCharacters(response.data.character);
    }

    loadCharacters();
  }, []);

  return (
    <Container>
      <CampaignContainer>
        {characters.map((character: Character) => (
          <CharacterCard key={character.id}>
            <Title>{character.name}</Title>
          </CharacterCard>
        ))}
      </CampaignContainer>
    </Container>
  );
}

export default Characters;