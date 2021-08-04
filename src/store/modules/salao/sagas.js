import moment from 'moment';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import consts from '../../../consts';
import api from '../../../services/api';
import util from '../../../util';
import {
  updateAgenda,
  updateAgendamento,
  updateColaboradores,
  updateSalao,
  updateServicos,
} from './actions';
import types from './types';

export function* getSalao() {
  try {
    const { data: res } = yield call(api.get, `/salao/${consts.salaoId}`);

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(updateSalao(res.salao));
  } catch (err) {
    alert(err.message);
  }
}

export function* allServicos() {
  try {
    const { data: res } = yield call(
      api.get,
      `/servico/salao/${consts.salaoId}`,
    );

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(updateServicos(res.servicos));
  } catch (err) {
    alert(err.message);
  }
}

export function* filterAgenda() {
  try {
    const { agendamento } = yield select((state) => state.salao);
    console.log(agendamento);
    const { data: res } = yield call(
      api.post,
      '/agendamento/dias-disponiveis',
      {
        salaoId: agendamento.salaoId,
        servicoId: agendamento.servicoId,
        data: moment().format('YYYY-MM-DD'),
      },
    );

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(updateAgenda(res.agenda));
    yield put(updateColaboradores(res.colaboradores));

    const { horariosDisponiveis, data, colaboradorId } = yield call(
      util.selectAgendamento,
      res.agenda,
    );
    yield put(
      updateAgendamento({
        data: moment(`${data}T${horariosDisponiveis[0][0]}`).format(),
        colaboradorId,
      }),
    );
  } catch (err) {
    alert(err.message);
  }
}

export default all([
  takeLatest(types.GET_SALAO, getSalao),
  takeLatest(types.ALL_SERVICOS, allServicos),
  takeLatest(types.FILTER_AGENDA, filterAgenda),
]);
