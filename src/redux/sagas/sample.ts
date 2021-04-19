import { select, put, takeEvery } from "@redux-saga/core/effects";
import { uploadSample, uploadSampleComplete } from '../slices/sample/sample';
import { RootState } from "../store";
import storage from '../../storage';

function* uploadSampleToServer(): any {
    const data = yield select((state: RootState) => state.sample);
    
    try {
        const response = yield storage.post('/samples/upload', data);
        yield put(uploadSampleComplete());
    } catch(error) {
        console.log(error);
    }
}

function* sampleSaga() {
    yield takeEvery(uploadSample.type, uploadSampleToServer);
}

export default sampleSaga;