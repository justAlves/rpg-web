import React from 'react';
import { ModalClose, ModalContainer, ModalContent } from './styles';
import { Form, Title } from '../../pages/Login/styles';
import Input from '../Input';
import Button from '../Button';
import { FiX } from 'react-icons/fi';

type ModalProps = {
  onClick: () => void;
  onCloseRequest: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Modal({onClick, onCloseRequest, onChange}: ModalProps) {

  return (
    <ModalContainer>
      <ModalContent>
        <ModalClose>
          <FiX size={32} color='#FFF' onClick={onCloseRequest}/>
        </ModalClose>
        <Title>Nova Campanha</Title>
        <Form>
          <Input onChange={onChange} type="text" placeholder="Nome da Campanha" />
          <Button onClick={onClick} type="button">Criar</Button>
        </Form>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;