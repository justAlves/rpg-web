import { useEffect, useState } from 'react';
import { Container, Title } from '../Login/styles';
import { CampaignContainer, CampaignCard } from './styles';
import { FiPlus } from 'react-icons/fi';
import api from '../../api';
import Modal from '../../components/Modal';


function CampaignSelect() {

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

    loadCampaigns();
  }, [modal]);

  return (
    <Container>
      <Title>Selecione sua Campanha</Title>
      <CampaignContainer>
        {campaigns.map((campaign: any) => (
          <CampaignCard key={campaign.id}>
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