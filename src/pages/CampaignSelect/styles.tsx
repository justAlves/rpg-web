import { styled } from 'styled-components';

interface CampaignCardProps {
  new?: boolean;
}

export const CampaignContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 90%;
  height: 90%;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 0.5rem;
`;

export const CampaignCard = styled.div<CampaignCardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  padding: 0.5rem 1rem;
  border: 2px ${props => !props.new ? 'solid' : 'dashed' } #fff;
  text-align: center;
  color: #fff;
  border-radius: 0.5rem;
  margin: 0.5rem;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    scale: 105%;
  }
`;