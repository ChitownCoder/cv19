import React, { useState, useEffect } from 'react';
import ZingChart from 'zingchart-react';
import axios from 'axios';

import { useSelector } from 'react-redux';

const DailyChart = () => {
	const [deaths, setDeath] = useState([]);

	useEffect((country = 'united-states') => {
		axios
			.get(`https://api.covid19api.com/total/country/${country}/status/deaths`)
			.then((res) => {
				setDeath(res.data);
				// let lastTotalCount = 0;
				// const dailyDeaths = res.data.map((dd) => {
				//   const currentDDCount = dd.Cases - lastTotalCount;
				//   lastTotalCount = dd.Cases;
				//   return {
				//    setDeath(currentDDCount)
				//   };
				console.log(res.data);
			});
		// .catch(ERR => {ERR})
	}, []);
	return (
		<div>
			<ZingChart data={deaths.Cases} />
		</div>
	);
};

export default DailyChart;
