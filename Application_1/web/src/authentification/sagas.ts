import { all, takeEvery, call } from 'redux-saga/effects';
import * as api from '../api';
import * as security from '../utils/security';
import * as m from './model';

function* login(action: m.Login) {
    try {
        const { userName, password } = action.payload;
        const res = yield call(api.auth.login(userName, password));
        security.setToken(res.jwt);
        yield call(api.auth.getBooks());
        console.log(res);
        console.warn(security.getToken());
        console.log('hi');
    } catch (e) {
        yield {};
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