import React from 'react'
import TitlePage from './../../components/TitlePage';
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ClienteForm() {
  const navigate = useNavigate();
  let { id } = useParams();

  return (
    <>
      <TitlePage title={"Detalhes do Cliente" + (id !== undefined ? id : '')}>
        <Button variant="outline-secondary" onClick={() => navigate('/Clientes/lista')}><FontAwesomeIcon icon={faArrowLeft} className="me-2"/>Voltar</Button>
      </TitlePage>
      <div>ClienteLista</div>
    </>
  )
}
