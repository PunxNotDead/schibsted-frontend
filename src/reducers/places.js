import { LOAD_PLACES } from '../actions/places';

const places = (state = {}, action) => {
	switch (action.type) {
		case LOAD_PLACES: {
			console.log(action.query);

			return Object.assign({}, state, {
				query: action.query
			});
		}
		default: {
			return state;
		}
	}
}

export default places;
