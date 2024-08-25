import "./App.css";
import { useEffect, useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from './components/AtividadeLista';


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

function App() {

  const [atividades, setAtividades] = useState(initialState);
  let initialId = Math.max(...atividades.map((e) => parseInt(e.id, 10)));

  const [activity, setActivity] = useState({id:0});
  const [id, setId] = useState(initialId + 1);

  useEffect(() =>{
    atividades.length <= 0 ? setId(0) : getLastId()
  }, [atividades])

  function addAtividade(ativ) {
    setAtividades([...atividades, { ...ativ, id: id}]);
  }

  function cancelarAtividade(){
    setActivity({id:0});
  }

  function deleteActivity(activityId) {
    if (activityId) {
      console.log(activityId);
      let indexOfActivity = atividades.findIndex((t) => t.id === activityId);
      let newActivities = [...atividades];
      newActivities.splice(indexOfActivity, 1);
      setAtividades(newActivities);
    }
  }

  function atualizarAtividade(ativ){
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
    setActivity({id:0});
  }

  function getLastId() {
    let idValue = Math.max(...atividades.map((e) => parseInt(e.id, 10)));
    setId(idValue + 1);
  }

  function getActivity(id){
    const activity = atividades.filter(t => t.id === id)[0];
    setActivity(activity);
  }

  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
        atividades={atividades}
        activity={activity}
        id={id}
      />
      <AtividadeLista
        atividades={atividades}
        deleteActivity={deleteActivity}
        getActivity={getActivity}
      />
    </>
  );
}

export default App;
