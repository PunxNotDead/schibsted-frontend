import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { PLACES_FETCH_REQUESTED } from '../actions/places';
import { loadPlacesFailed, loadPlacesDone } from '../actions/places'
import Api from '../services/api';

function* fetchPlacesList(action) {
	try {
		// Api.getPlacesList should return Promise
		const places = yield call(Api.getPlacesList, action.query);
		yield put(loadPlacesDone(places));
	} catch (e) {
		yield put(loadPlacesFailed(e.message));
	}
}

function* placesSaga() {
  yield takeLatest(PLACES_FETCH_REQUESTED, fetchPlacesList);
}

export default placesSaga;
