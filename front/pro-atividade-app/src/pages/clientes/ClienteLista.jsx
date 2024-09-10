import React from "react";
import TitlePage from "../../components/TitlePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

const clientes = [
  {
    id: 1,
    nome: "Microsoft",
    responsavel: "Otto",
    contato: "1066554",
    situacao: "Ativo",
  },
  {
    id: 2,
    nome: "Amazon",
    responsavel: "Willian",
    contato: "1066554",
    situacao: "Desativado",
  },
  {
    id: 3,
    nome: "Google",
    responsavel: "Otto",
    contato: "1066554",
    situacao: "Em análise",
  },
  {
    id: 4,
    nome: "Facebook",
    responsavel: "Kevin",
    contato: "1066554",
    situacao: "Ativo",
  },
  {
    id: 5,
    nome: "Twitter",
    responsavel: "Jack",
    contato: "1066554",
    situacao: "Ativo",
  },
];

export default function ClienteLista() {
  const history = useHistory();
  const [termoBusca, setTermoBusca] = useState("");

  const handleInput = (e) => {
    setTermoBusca(e.target.value);
  }

  const clientesFiltrados = clientes.filter((cliente) => {
    return (
      Object.values(cliente).join(' ').toLowerCase().includes(termoBusca.toLowerCase())
    )
  })

  const novoCliente = () => {
    history.push('/Clientes/detalhe');
  }

  return (
    <>
      <TitlePage title="Lista de Clientes" >
        <Button variant="outline-secondary" onClick={novoCliente}><FontAwesomeIcon icon={faPlus} className="me-2"/>Novo Cliente</Button>
      </TitlePage>
      <InputGroup className="mt-3 mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Buscar:
        </InputGroup.Text>
        <Form.Control
          onChange={handleInput}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <table className="table table-striped table-hover">
        <thead className="table-dark mt-3">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Responsável</th>
            <th scope="col">Contato</th>
            <th scope="col">Situação</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.responsavel}</td>
              <td>{cliente.contato}</td>
              <td>{cliente.situacao}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-2" onClick={() => history.push(`/Clientes/detalhe/${cliente.id}`)}>
                  <FontAwesomeIcon icon={faUserEdit} className="me-2"/>
                  Editar
                </button>
                <button className="btn btn-sm btn-outline-danger me-2">
                  <FontAwesomeIcon icon={faUserTimes} className="me-2"/>
                  Desativar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
