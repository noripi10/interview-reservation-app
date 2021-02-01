import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Container,
	Typography,
	TextField,
	Toolbar,
	Button,
	Stepper,
	Step,
	StepLabel,
} from '@material-ui/core';
import Checkout from './component/Checkout';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const getSteps = () => {
	return ['希望日時など必須項目をして下さい', '入力内容確認', '送信完了'];
};

const getTileContent = ({ date, view }) => {
	// console.log(date);
	return (
		<div style={{ backgroundColor: 'yellow' }}>
			<h1>○</h1>
		</div>
	);
};

function App() {
	return <Checkout />;
}

// function App() {
// 	const classes = useStyles();
// 	const steps = getSteps();
// 	const [date, setDate] = useState(new Date());
// 	const [activeStep, setActiveStep] = React.useState(0);
// 	return (
// 		<div className="App">
// 			<AppBar position="static">
// 				<Toolbar>
// 					<Typography variant="h6" className={classes.title}>
// 						WEB面接予約画面
// 					</Typography>
// 				</Toolbar>
// 			</AppBar>
// 			<Stepper alternativeLabel activeStep={activeStep}>
// 				{steps.map((label) => (
// 					<Step key={label}>
// 						<StepLabel>{label}</StepLabel>
// 					</Step>
// 				))}
// 			</Stepper>
// 			<div className="App-calendar">
// 				<div
// 					style={{
// 						display: 'flex',
// 						justifyContent: 'center',
// 						alignItems: 'center',
// 						// width: '100vw',
// 						backgroundColor: '#999',
// 					}}
// 				>
// 					<Calendar
// 						locale="ja-JP"
// 						value={date}
// 						onChange={(date) => setDate(date)}
// 						// tileContent={getTileContent}
// 						showDoubleView={false}
// 					/>
// 				</div>
// 				<form
// 					style={{
// 						width: '100vw',
// 						height: '60vh',
// 						margin: 10,
// 						backgroundColor: '#ddd',
// 					}}
// 				>
// 					<Container
// 						style={{
// 							display: 'flex',
// 							flexDirection: 'column',
// 							margin: 10,
// 							alignItems: 'center',
// 						}}
// 					>
// 						<TextField
// 							id="reserve-date"
// 							label="1.予約希望日(カレンダーから選択)"
// 							variant="standard"
// 							aria-readonly
// 							value={date.toLocaleDateString()}
// 						/>
// 						<TextField
// 							id="reserve-date"
// 							label="2.希望時間"
// 							variant="standard"

// 							// value={date.toLocaleDateString()}
// 						/>
// 						<TextField id="reserve-date" label="" variant="standard" />
// 						<TextField id="reserve-date" label="" variant="standard" />
// 						<TextField id="reserve-date" label="" variant="standard" />
// 						<Button
// 							color="primary"
// 							style={{ position: 'absolute', right: 50, bottom: 50 }}
// 							variant="contained"
// 							color="primary"
// 							size="large"
// 							onClick={() => setActiveStep(1)}
// 						>
// 							確認画面へ
// 						</Button>
// 					</Container>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }

export default App;

{
	/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */
}
