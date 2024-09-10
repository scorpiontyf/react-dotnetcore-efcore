import { useEffect, useState } from "react";
import api from "../../api/atividade";
import { Button, Modal } from "react-bootstrap";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AtividadeLista from './AtividadeLista';
import AtividadeForm from './AtividadeForm';
import TitlePage from './../../components/TitlePage';

let initialState = [
  {
    id: 1,
    prioridade: "2",
    titulo: "TA LIGADO",
    descricao: "Primeira Atividade",
  },
  {
    id: 2,
    prioridade: "1",
    titulo: "ECTO",
    descricao: "Segunda Atividade",
  },
];

const initialActivity = {
  id: 0,
  titulo: "",
  prioridade: 0,
  descricao: "",
};

export default function Atividade() {
  const [showAtividadeModal, setShowAtividadeModal] = useState(false);
  const [showConfirmModal, setConfirmModal] = useState(false);
  const [atividades, setAtividades] = useState(initialState);
  const [activity, setActivity] = useState({ id: 0 });

  const handleAtividadeModal = () => setShowAtividadeModal(!showAtividadeModal);
  const handleConfirmModal = (id) => {
    if (id !== 0 && id) {
      const activity = atividades.filter((t) => t.id === id)[0];
      setActivity(activity);
    } else setActivity({ id: 0 });
    setConfirmModal(!showConfirmModal);
  };

  const pegaTodasAtividades = async () => {
    const response = await api.get("Atividade");
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getAtividades = async () => {
      const todasAtividades = await pegaTodasAtividades();
      if (todasAtividades) setAtividades(todasAtividades);
    };
    getAtividades();
  }, []);

  const addAtividade = async (ativ) => {
    const response = await api.post("Atividade", ativ);
    setAtividades([...atividades, response.data]);
  };

  function cancelarAtividade() {
    setActivity({ id: 0 });
  }

  const deleteActivity = async (id) => {
    handleConfirmModal(0);
    const response = await api.delete(`atividade/${id}`);
    if (response.data) {
      let ativs = [...atividades];
      ativs.splice(
        ativs.findIndex((t) => t.id === id),
        1
      );
      setAtividades([...ativs]);
    }
  };

  const atualizarAtividade = async (ativ) => {
    const response = await api.put(`Atividade/${ativ.id}`, ativ);
    const { id } = response.data;
    if (response.data) {
      setAtividades(atividades.map((item) => (item.id === id ? ativ : item)));
    }
    setActivity({ id: 0 });
  };

  function getActivity(id) {
    const activity = atividades.filter((t) => t.id === id)[0];
    setActivity(activity);
    handleAtividadeModal();
  }

  function createAtividade() {
    setActivity(initialActivity);
    handleAtividadeModal();
  }
  return (
    <>
      <TitlePage
        model={activity}
        action={createAtividade}
        title={`Atividade ${activity.id !== 0 ? activity.id : ""}`}
        icon={faSquarePlus}
      >
        <Button variant="outline-secondary" onClick={createAtividade}>
          <i>
            <FontAwesomeIcon icon={faSquarePlus} />
          </i>
        </Button>
      </TitlePage>
      <AtividadeLista
        handleConfirmModal={handleConfirmModal}
        atividades={atividades}
        getActivity={getActivity}
      />
      <Modal show={showAtividadeModal} onHide={handleAtividadeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Atividade {activity.id !== 0 ? activity.id : ""}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AtividadeForm
            addAtividade={addAtividade}
            atualizarAtividade={atualizarAtividade}
            cancelarAtividade={cancelarAtividade}
            handleAtividadeModal={handleAtividadeModal}
            atividades={atividades}
            activity={activity}
            id={activity.id}
          />
        </Modal.Body>
      </Modal>
      <Modal show={showConfirmModal} onHide={handleConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Excluindo Atividade {activity.id !== 0 ? activity.id : ""}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja excluir a atividade {activity.id}?
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <button
            className="btn btn-outline-success me-2"
            onClick={() => deleteActivity(activity.id)}
          >
            <i>
              <FontAwesomeIcon icon={faCircleCheck} />
            </i>
            Sim
          </button>
          <button
            className="btn btn-danger me-2"
            onClick={() => handleConfirmModal(0)}
          >
            <i>
              <FontAwesomeIcon icon={faTimesCircle} />
            </i>
            Não
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
