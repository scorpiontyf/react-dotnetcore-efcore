import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faMeh } from "@fortawesome/free-regular-svg-icons";
import { faFrown } from "@fortawesome/free-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

export default function Atividades(props) {
  function borderByPriority(prioridade) {
    if (prioridade) {
      switch (prioridade) {
        case "Baixa":
          return "card mb-2 shadow-sm border border-primary";
        case "Normal":
          return "card mb-2 shadow-sm border border-secondary";
        case "Alta":
          return "card mb-2 shadow-sm border border-warning";
        default:
          return "card mb-2 shadow-sm";
      }
    }
  }

  function colorByPriority(prioridade) {
    if (prioridade) {
      switch (prioridade) {
        case "Baixa":
          return "ms-1 text-primary";
        case "Normal":
          return "ms-1 text-secondary";
        case "Alta":
          return "ms-1 text-warning";
        default:
          return "";
      }
    }
  }

  function prioridadeIcon(param) {
    switch (param) {
      case "Baixa":
        return faSmile;
      case "Normal":
        return faMeh;
      case "Alta":
        return faFrown;
      default:
        return faQuestionCircle;
    }
  }

  function prioridadeLabel(param) {
    switch (param) {
      case "Baixa":
      case "Normal":
      case "Alta":
        return param;
      default:
        return "Indefinida";
    }
  }



  return (
    <div
      className={borderByPriority(props.ativ.prioridade)}
      width="18rem"
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">{props.ativ.id}</span>-
            {props.ativ.titulo}
          </h5>
          <h6>
            Prioridade:
            <span className={colorByPriority(props.ativ.prioridade)}>
              {prioridadeLabel(props.ativ.prioridade)}
              <i className="ms-1">
                <FontAwesomeIcon
                  icon={prioridadeIcon(props.ativ.prioridade)}
                />
              </i>
            </span>
          </h6>
        </div>
        <p className="card-text">{props.ativ.descricao}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button 
            onClick={() => props.getActivity(props.ativ.id)}
            className="btn btn-sm btn-outline-primary me-2"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            onClick={() => props.handleConfirmModal(props.ativ.id)}
            className="btn btn-sm btn-outline-danger"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
}
