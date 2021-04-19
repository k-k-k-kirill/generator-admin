import { all, fork } from 'redux-saga/effects';

// Sagas
import sampleSaga from './sample';

function* rootSaga() {
    yield all([
        fork(sampleSaga),
    ]);
}

export default rootSaga;