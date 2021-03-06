import { FETCH_DATA, DATA_SUCCESS, DATA_ERROR } from '../actions';

const initialState = {
	dailyDeaths: [],
	isLoading: false,
	error: '',
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				isLoading: true,
			};
		case DATA_SUCCESS:
			return {
				...state,
				dailyDeaths: action.payload,
				isLoading: false,
				error: '',
			};
		case DATA_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
