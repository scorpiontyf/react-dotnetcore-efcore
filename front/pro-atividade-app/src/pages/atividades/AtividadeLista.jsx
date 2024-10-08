import React from 'react'
import Atividade from './AtividadeItem'

export default function AtividadeLista(props) {
  return (
    <div className="mt-3">
        {props.atividades.map((ativ) => (
            <Atividade
              handleConfirmModal={props.handleConfirmModal}
              key={ativ.id}
              ativ={ativ}
              getActivity={props.getActivity}
              />
        ))}
      </div>
  )
}
