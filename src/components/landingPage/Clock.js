import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		marginTop: '40px',
		padding: '1rem 1rem',
		textAlign: 'center'
	},
	date_root: {
		marginBottom: '.5rem'
	}
});

const Clock = () => {
	const classes = useStyles();
	const [dateData, setDateData] = useState({});
	let dateOutput;
	let watchBasic;

	useEffect(() => {
		const activeClock = setTimeout(() => {
			setDateData({ time: getTime(), date: getDate() });
		}, 1000);

		return () => {
			clearTimeout(activeClock);
		};
	}, [dateData]);

	if (dateData.date) {
		const { year, month, date, weekDay } = dateData.date;
		dateOutput = `${weekDay}, ${date} ${month} - ${year}`;
		watchBasic = modifiedTimeOutput(dateData.time);
	}

	return (
		<Paper className={classes.root}>
			<Typography className={classes.date_root} variant="h4">
				{dateOutput}
			</Typography>
			<Typography variant="h5">{watchBasic}</Typography>
		</Paper>
	);
};

function getTime() {
	const now = new Date();
	let hours, minutes, seconds;

	hours = now.getHours();
	minutes = now.getMinutes();
	seconds = now.getSeconds();

	return { hours, minutes, seconds };
}
function getDate() {
	const now = new Date();
	let year, month, date, weekDay;

	year = now.getFullYear();
	month = now.getMonth();
	date = now.getDate();
	weekDay = now.getDay();

	return { year, month: monthNames[month], date, weekDay: weekDays[weekDay] };
}

function modifiedTimeOutput(time) {
	const { hours, minutes, seconds } = time;
	let initialTime = [hours, minutes, seconds];
	const modifiedOutput = initialTime.map(timeValue => {
		let valueString;

		if (timeValue < 10) {
			timeValue = '0' + timeValue;
		}

		valueString = timeValue.toString();
		if (valueString.length > 2) {
			timeValue = valueString.slice(0, 2);
		}

		return timeValue;
	});

	const basicWatch = modifiedOutput.join(':');

	return basicWatch;
}

export default Clock;

const monthNames = [
	'Januar',
	'Februar',
	'Marts',
	'April',
	'Maj',
	'Juni',
	'Juli',
	'August',
	'September',
	'Oktober',
	'November',
	'December'
];

const weekDays = [
	'Søndag',
	'Mandag',
	'Tirsdag',
	'Onsdag',
	'Torsdag',
	'Fredag',
	'Lørdag'
];
