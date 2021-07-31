import produce from 'immer';
import consts from '../../../consts';
import types from './types';

const INITIAL_STATE = {
  salao: {},
  servicos: [],
  agenda: [],
  colaboradores: [],
  agendamento: {
    clienteId: consts.clienteId,
    salaoId: consts.salaoId,
    servicoId: null,
    colaboradorId: null,
    data: null,
  },
  form: {
    inputFiltro: '',
    inputFiltroFoco: false,
    modalEspecialista: false,
    modalAgendamento: 0,
    agendamentoLoading: false,
  },
};

function salao(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_SALAO:
      return produce(state, (draft) => {
        draft.salao = { ...salao, ...action.salao };
      });
    case types.UPDATE_SERVICOS:
      return produce(state, (draft) => {
        draft.servicos = action.servicos;
      });
    case types.UPDATE_FORM:
      return produce(state, (draft) => {
        draft.form = { ...state.form, ...action.form };
      });
    case types.UPDATE_AGENDA:
      return produce(state, (draft) => {
        draft.agenda = [...state.agenda, action.agenda];
      });
    case types.UPDATE_AGENDAMENTO:
      return produce(state, (draft) => {
        if (draft.agendamento.servicoId) {
          draft.form.modalAgendamento = 2;
        }
        draft.agendamento = { ...state.agendamento, ...action.agendamento };
      });
    default: {
      return state;
    }
  }
}

export default salao;
