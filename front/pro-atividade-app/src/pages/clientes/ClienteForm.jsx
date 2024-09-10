import React from 'react'
import TitlePage from './../../components/TitlePage';
import { Button } from "react-bootstrap";
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTentArrowTurnLeft } from '@fortawesome/free-solid-svg-icons';

export default function ClienteForm() {
  const history = useHistory();
  let { id } = useParams();

  return (
    <>
      <TitlePage title={"Detalhes do Cliente" + (id !== undefined ? id : '')}>
        <Button variant="outline-secondary" onClick={() => history.goBack()}><FontAwesomeIcon icon={faArrowLeft} className="me-2"/>Voltar</Button>
      </TitlePage>
      <div>ClienteLista</div>
    </>
  )
}
