import React, { useEffect } from "react";
import { useState } from "react";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialActivity = {
  id: 0,
  titulo: "",
  prioridade: 0,
  descricao: "",
};

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(actualActivity());

  useEffect(() => {
    if (props.activity.id !== 0) {
      setAtividade(props.activity);
    }
  }, [props.activity]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setAtividade({ ...atividade, [name]: value });
  };

  const handleCancelar = (e) =>{
    e.preventDefault();
    props.cancelarAtividade();
    props.handleAtividadeModal()

    setAtividade(initialActivity);
  }

  const handleSubmit = (e) =>{
    console.log(e)
    e.preventDefault();

    if(props.activity.id !== 0){
      props.atualizarAtividade(atividade);
    } else{
      props.addAtividade(atividade);
    }

    setAtividade(initialActivity);
  }

  function actualActivity() {
    if (props.activity.id !== 0) {
      return props.activity;
    } else {
      return initialActivity;
    }
  }
  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="descricao" className="form-label">
          Título
        </label>
        <input
          type="text"
          name="titulo"
          value={atividade.titulo}
          onChange={inputTextHandler}
          className="form-control"
          id="titulo"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Prioridade</label>
        <select
          name="prioridade"
          value={atividade.prioridade}
          onChange={inputTextHandler}
          id="prioridade"
          className="form-select"
        >
          <option defaultValue="0">Selecionar...</option>
          <option value="Baixa">Baixa</option>
          <option value="Normal">Normal</option>
          <option value="Alta">Alta</option>
        </select>
      </div>
      <div className="col-md-12">
        <label htmlFor="descricao" className="form-label">
          Descrição
        </label>
        <textarea
          type="text"
          name="descricao"
          value={atividade.descricao}
          onChange={inputTextHandler}
          className="form-control"
          id="descricao"
        />
        <hr />
      </div>
      <div className="col-12 mt-0">
        {atividade.id === 0 ? (
          <button
          type="submit"
          className="btn btn-outline-success me-2"
          onClick={props.handleAtividadeModal}
        >
          <i className="me-2">
            <FontAwesomeIcon icon={faSquarePlus} />
          </i>
          Salvar
        </button>
        ) : (
          <>
            <button
              type="submit"
              className="btn btn-outline-success me-2"
              onClick={props.handleAtividadeModal}
            >
              <i className="me-2">
                <FontAwesomeIcon icon={faSquarePlus} />
              </i>
              Salvar
            </button>
            <button
              type="submit"
              className="btn btn-outline-warning"
              onClick={handleCancelar}
            >
              Cancelar
            </button>
          </>
        )}
      </div>
    </form>
    </>
  );
}
