import { PLACES_FETCH_REQUESTED, PLACES_FETCH_DONE } from '../actions/places';

const places = (state = {}, action) => {
	switch (action.type) {
		case PLACES_FETCH_REQUESTED: {
			console.log(action.query);

			return Object.assign({}, state, {
				query: action.query
			});
		}
		case PLACES_FETCH_DONE: {
			return Object.assign({}, state, {
				list: action.places
			});
		}
		default: {
			return state;
		}
	}
}

export default places;
