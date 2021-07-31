import { all, call, put, takeLatest } from 'redux-saga/effects';
import consts from '../../../consts';
import api from '../../../services/api';
import { updateSalao } from './actions';
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

export default all([takeLatest(types.GET_SALAO, getSalao)]);
