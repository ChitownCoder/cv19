import React from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import RingLoader from 'react-spinners/RingLoader';

/* CHARTS TO COME LATER */
// import DailyChart from './components/DailyChart';

import { fetchData } from './actions';

/*{
          date: dd.Date,
          totalDeaths: dd.Cases,
          dailyDeaths: currentDDCount
        }*/
const override = css`
	margin: 0 auto;
	display: block;
`;
const CovidGraph = (props) => {
	return (
		<section id="covidGraph">
			<div className="head1">
				<h1>Covid-19 Daily Death Count</h1>
			</div>
			<div>
				{props.isLoading ? (
					<div>
						<RingLoader
							css={override}
							size={100}
							color={'#d0021b'}
							loading={props.isLoading}
						/>
					</div>
				) : (
					<div className="stats">
						<button onClick={() => props.fetchData()}>See Counts</button>
						{props.error && (
							<div style={{ color: 'red' }}>*error loading data*</div>
						)}
					</div>
				)}
				<div>
					{props.dailyDeaths.map((dd) => {
						return (
							<div>
								<h1>Total Deaths:{dd.totalDeaths}</h1>
								<h3>Daily Deaths:{dd.dailyDeaths}</h3>
								<footer>Date:{dd.date}</footer>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		dailyDeaths: state.dailyDeaths,
		isLoading: state.isLoading,
		error: state.error,
	};
};

export default connect(mapStateToProps, { fetchData })(CovidGraph);
