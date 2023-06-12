import { useEffect, useState } from 'react';
import { Container, Title } from '../Login/styles';
import { CampaignContainer, CampaignCard } from './styles';
import { FiPlus } from 'react-icons/fi';
import api from '../../api';
import Modal from '../../components/Modal';
import { useNavigate } from 'react-router-dom';

interface Campaign {
  id: string;
  name: string;
}

function CampaignSelect() {

  const navigate = useNavigate();

  const [campaigns, setCampaigns] = useState([]);
  const [modal, setModal] = useState(false);

  const [name, setName] = useState('');

  async function handleCreateCampaign() {
    await api.post('/campaign', {
      name
    });

    setName('');
    setModal(false);
  }

  useEffect(() => {
    async function loadCampaigns() {
      const response = await api.get('/campaign');
      setCampaigns(response.data.campaign);
    }

    setTimeout(() => loadCampaigns(), 1000);
  }, [modal, campaigns]);

  function handleSelectCampaign(id: string) {
    navigate(`/characters/campaign/${id}`);
  }

  return (
    <Container>
      <Title>Selecione sua Campanha</Title>
      <CampaignContainer>
        {campaigns.map((campaign: Campaign) => (
          <CampaignCard onClick={() => handleSelectCampaign(campaign.id)} key={campaign.id}>
            <h1>{campaign.name}</h1>
          </CampaignCard>
        ))}
        <CampaignCard new onClick={() => setModal(!modal)}>
          <FiPlus size={32} />
        </CampaignCard>
      </CampaignContainer>
      {modal && (
        <Modal onCloseRequest={() => setModal(false)} onClick={handleCreateCampaign} onChange={text => setName(text.target.value)}/>
      )}
    </Container>
  );
}

export default CampaignSelect;