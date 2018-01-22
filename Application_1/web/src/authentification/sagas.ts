import { all, takeEvery, call, put } from 'redux-saga/effects';
import * as api from '../api';
import * as security from '../utils/security';
import * as m from './model';

function* login(action: m.LoginAction) {
    try {
        const { userName, password } = action.payload;
        const res = yield call(api.auth.login(userName, password));
        security.setToken(res.jwt);  
    } catch (ex) {
        yield put(m.actions.loginFailure(ex.response.text));
    }
}

function* watchLogin() {
    yield takeEvery(m.LOGIN, login);
}

export function* rootSaga() {
    yield all([
        watchLogin()
    ]);
}