import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';

export const fetchDataWithoutThunk = () => {
	return {
		type: FETCH_DATA,
	};
};

//export const fetchData = () => dispatch => {
export const fetchData = (country = 'united-states') => {
	return (dispatch) => {
		// dispatch FETCH_DATA
		dispatch({
			type: FETCH_DATA,
		});
		setTimeout(() => {
			axios
				.get(
					`https://api.covid19api.com/total/country/${country}/status/deaths`
				)
				.then((res) => {
					// dispatch transition to DATA_SUCCESS
					console.log('I am working! ', res);
					let lastTotalCount = 0;
					const dailyDeaths = res.data.map((dd) => {
						const currentDDCount = dd.Cases - lastTotalCount;
						lastTotalCount = dd.Cases;
						return {
							city: dd.city,
							date: dd.Date,
							totalDeaths: dd.Cases,
							dailyDeaths: currentDDCount,
						};
					});
					dispatch({ type: DATA_SUCCESS, payload: [...dailyDeaths].reverse() });
				})
				.catch((err) => {
					// dispatch transition to DATA_ERROR
					console.log('Something went wrong', err);
					dispatch({ type: DATA_ERROR, payload: err });
				});
		}, 1500);
	};
};
