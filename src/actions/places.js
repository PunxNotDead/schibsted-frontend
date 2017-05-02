export const PLACES_FETCH_REQUESTED = 'PLACES_FETCH_REQUESTED';
export const PLACES_FETCH_FAILED = 'PLACES_FETCH_FAILED';
export const PLACES_FETCH_DONE = 'PLACES_FETCH_DONE';

export const loadPlaces = query => ({ type: PLACES_FETCH_REQUESTED, query });
export const loadPlacesFailed = error => ({ type: PLACES_FETCH_FAILED, error });
export const loadPlacesDone = places => ({ type: PLACES_FETCH_DONE, places });
