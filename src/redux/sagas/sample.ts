import { select, put, takeEvery, call } from "@redux-saga/core/effects";
import {
    uploadSample,
    uploadSampleComplete
} from '../slices/sample/sample';
import { setMessage } from '../slices/ui/ui';
import { RootState } from "../store";
import Storage from '../../storage';

function* uploadSampleToServer(action: any): any {
    const formData = new FormData();
    formData.append('upload', action.payload);
    const storage = new Storage();

    try {
        const response = yield call(storage.post, '/samples/upload', formData, { "Content-type": "multipart/form-data" });

        if(response.error) {
            return yield put(setMessage({ 
                content: 'Error while uploading sample!',
                type: 'error' 
            }));
        }

        if(response.fileKey) {
            const { fileKey, duration } = response;
            const data = yield select((state: RootState) => state.sample);
            const sampleMeta = yield {...data, fileKey, duration};
            yield call(storage.post, '/samples/meta', sampleMeta);
            yield put(uploadSampleComplete());
            yield put(setMessage({ 
                content: 'Sample upload complete!',
                type: 'success' 
            }));
        }
    } catch(error) {
        yield console.log(error);
    }
}

function* sampleSaga() {
    yield takeEvery(uploadSample.type, uploadSampleToServer);
}

export default sampleSaga;