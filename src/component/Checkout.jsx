import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative',
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));

const steps = ['予約内容入力', '入力内容確認'];

function getStepContent(step) {
	switch (step) {
		case 0:
			return <AddressForm />;
		case 1:
			return <Review />;
		default:
			throw new Error('Unknown step');
	}
}

export default function Checkout() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						WEB面接予約画面
					</Typography>
				</Toolbar>
			</AppBar>
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography component="h1" variant="h4" align="center">
						{steps[activeStep]}
					</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<React.Fragment>
						{activeStep === steps.length ? (
							<React.Fragment>
								<Typography variant="h6" gutterBottom>
									面接のご予約ありがとうございました。
								</Typography>
								<Typography variant="subtitle1">
									弊社／人事担当者よりご入力いただいたメールアドレスに
									<br />
									日程調整等の詳細な情報をご返信させていただきます。
								</Typography>
								<Typography component="span">
									ご予約のキャンセル依頼またはご不明点ございましたら、
									<br />
									下記の電話番号までお問い合わせください。
								</Typography>
							</React.Fragment>
						) : (
							<React.Fragment>
								{getStepContent(activeStep)}
								<div className={classes.buttons}>
									{activeStep !== 0 && (
										<Button onClick={handleBack} className={classes.button}>
											戻る
										</Button>
									)}
									<Button
										variant="contained"
										color="primary"
										onClick={handleNext}
										className={classes.button}
									>
										{activeStep === steps.length - 1 ? '送信' : '次へ'}
									</Button>
								</div>
							</React.Fragment>
						)}
					</React.Fragment>
				</Paper>
				<Copyright />
			</main>
		</React.Fragment>
	);
}
