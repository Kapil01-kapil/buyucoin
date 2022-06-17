
import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import {
    getDetails,
    getHomes,
} from './actions';
import axios from 'axios';
import { url } from '../services/api_config'
import * as RootNavigation from '../navigation/NavigationService';
function* getHomeRequest(action) {

    try {

        var response = yield axios.get(url.HOME_URL);
        if (response.data.status === "success") {
            yield put(getHomes.success(response.data.data))
            yield put(getHomes.request({ isLoading: false }));
        } else {
            yield put(getHomes.failure(response.data))
            yield put(getHomes.request({ isLoading: false }));
        }


    } catch (error) {
        console.log('error,', error, error.data, error.data)
        yield put(getHomes.failure());
        yield put(getHomes.fulfill({ isLoading: false }));
    } finally {
        yield put(getHomes.fulfill({ isLoading: false }));
    }
}

//Get User Register Location 

function* getUserDetailsRequest(action) {
    try {
        var response = yield axios.get(`${url.HOME_URL}?symbol=${action.payload.marketName}`);
        if (response.data.status === "success") {
            console.log("responseData88897t3", response);
            yield put(getDetails.success(response.data.data))
            yield put(getDetails.request({ isLoading: false }));
            RootNavigation.navigate("Details");
          
        } else {
            yield put(getDetails.failure(response.data))
            yield put(getDetails.request({ isLoading: false }));
        }

    } catch (error) {
        console.log('error,', error, error.data, error.data)
        yield put(getDetails.failure());
        yield put(getDetails.fulfill({ isLoading: false }));
    } finally {
        yield put(getDetails.fulfill({ isLoading: false }));
    }
}











function* callHome() {



    yield takeLatest(getHomes.TRIGGER, getHomeRequest);
    yield takeLatest(getDetails.TRIGGER, getUserDetailsRequest);

}
export default callHome;
