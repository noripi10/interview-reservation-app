import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  withStyles,
  CssBaseline,
  AppBar,
  Button,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Link,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';

import AddressForm from './AddressForm';
import Review from './Review';
import Confirm from './Confirm';

import events_sample from '../events_sample.json';

import { useRecoilState } from 'recoil';
import { eventState } from '../store/store';

const baseColor = '#D0101B';

const CalendarStyle = withStyles({
  active: {
    color: '#fff',
    backgroundColor: baseColor,
  },
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: baseColor,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  step: {},
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href=''>
        your site
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const steps = ['予約内容入力', '入力内容確認'];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    case 2:
      return <Confirm />;
    default:
      throw new Error('Unknown step');
  }
};

const numberComponent = (num, active) => {
  const textColor = active ? '#fff' : '#000';
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 25,
        backgroundColor: active ? baseColor : '#ddd',
        borderRadius: 25,
      }}
    >
      <span style={{ color: textColor, fontSize: 12, margin: 0, padding: 0 }}>
        {num}
      </span>
    </div>
  );
};

const stepIconComponent = (props) => {
  const { active, completed, icon } = props;
  return (
    <div>
      {completed ? (
        <CheckCircle style={{ color: baseColor, fontSize: 30 }} />
      ) : (
        numberComponent(icon, active)
      )}
    </div>
  );
};

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Checkout(props) {
  const classes = useStyles();
  const [event, setEvent] = useRecoilState(eventState);
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    setEvent(events_sample.events);
  }, []);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              WEB面接 予約画面
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h5' align='center'>
            {steps[activeStep]}
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={stepIconComponent}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <Confirm />
            ) : (
              <>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      variant='outlined'
                      onClick={handleBack}
                      className={classes.button}
                    >
                      戻る
                    </Button>
                  )}
                  <Button
                    type='submit'
                    variant='contained'
                    style={{ backgroundColor: '#D0111B', color: '#fff' }}
                    onClick={() => handleNext()}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? '送信' : '次へ'}
                  </Button>
                </div>
                <div style={{ marginTop: 8, textAlign: 'right', fontSize: 10 }}>
                  ブラウザの戻るボタンは使用しないでください
                </div>
              </>
            )}
          </>
        </Paper>
        <Copyright />
      </div>
    </>
  );
}
