import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../Login/styles';
import api from '../../api';
import { AvatarContainer, CharacterCard, CharacterName } from './styles';
import { CampaignContainer } from '../CampaignSelect/styles';
import { Slider } from '@mui/material';
import { AiOutlineUser } from 'react-icons/ai';

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

    setInterval(() => loadCharacters(), 3000);
    
  }, []);

  function lifeColor(character: Character){
    if(character.currentLife > character.maxLife/2){
      return 'success';
    }else if(character.currentLife > character.maxLife/4){
      return 'warning';
    }else{
      return 'error';
    }
  }

  return (
    <Container>
      <CampaignContainer>
        {characters.map((character: Character) => (
          <CharacterCard key={character.id}>
            <CharacterName>{character.name}</CharacterName>
            <AvatarContainer>
              <AiOutlineUser size={150} color='#9c9c9c'/>
            </AvatarContainer>
            <Slider
              sx={{
                height: 20,
              }}
              defaultValue={character.currentLife}
              max={character.maxLife}
              value={character.currentLife}
              min={0}
              disableSwap
              draggable={false}
              color={lifeColor(character)}
              valueLabelDisplay='on'
            />
            <Slider
              sx={{
                height: 20,
              }}
              defaultValue={character.currentSanity}
              max={character.maxSanity}
              value={character.currentSanity}
              min={0}
              disableSwap
              draggable={false}
              valueLabelDisplay='on'
            />
          </CharacterCard>
        ))}
      </CampaignContainer>
    </Container>
  );
}

export default Characters;