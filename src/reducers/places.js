import { PLACES_FETCH_REQUESTED, PLACES_FETCH_DONE, PLACES_FETCH_FAILED } from '../actions/places';

const places = (state = {}, action) => {
	switch (action.type) {
		case PLACES_FETCH_REQUESTED: {
			return Object.assign({}, state, {
				query: action.query,
				listLoading: true
			});
		}

		case PLACES_FETCH_DONE: {
			return Object.assign({}, state, {
				list: action.places,
				listLoading: false
			});
		}

		case PLACES_FETCH_FAILED: {
			return Object.assign({}, state, {
				listLoading: false
			});
		}

		default: {
			return state;
		}
	}
}

export default places;
