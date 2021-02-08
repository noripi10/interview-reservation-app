import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Typography,
  TextField,
  // FormControl,
  // InputLabel,
  // Select,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { useRecoilState } from 'recoil';
import { inputState } from '../store/store';
// import { Calendar } from './Calendar';
import { FCalendar } from './FullCalendar';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
  calendarComponent: {
    marginBottom: 15,
  },
}));

// const targetList = ['1', '2', '3', '4', '10', '16', '22', '26'];

export default function AddressForm() {
  const classes = useStyles();
  const [inputItem, setInputItem] = useRecoilState(inputState);

  return (
    <>
      <Typography gutterBottom>・日付と空き時間を選択して下さい</Typography>
      {/* <div
        style={{
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Calendar targetList={targetList} />
        <FCalendar />
        <ReservableList />
      </div> */}
      <div className={classes.calendarComponent}>
        <FCalendar />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='reserveDate'
            label='希望日（カレンダーより選択）'
            fullWidth
            color='secondary'
            disabled
            inputProps={{ 'aria-readonly': true }}
            value={
              inputItem.date
                ? moment(inputItem.date).format('YYYY/MM/DD (ddd)')
                : '未選択'
            }
            onChange={(date) =>
              setInputItem((item) => ({ ...item, date: date.toString() }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor='time' color='secondary'>
              予約時間
            </InputLabel>
            <Select
              native
              value={inputItem.time}
              onChange={(e) => {
                let { options, value } = e.target;
                setInputItem((item) => ({
                  ...item,
                  time: value,
                  timeLabel: options[options.selectedIndex].text,
                }));
              }}
              inputProps={{
                name: 'time',
                id: 'time',
              }}
              color='secondary'
            >
              <option aria-label='None' value='' />
              <option value={9}>09：00 - 10：00</option>
              <option value={10}>10：00 - 11：00</option>
              <option value={10}>11：00 - 12：00</option>
            </Select>
          </FormControl> */}

          <TextField
            required
            id='reserveTime'
            label='希望時間（カレンダーより選択）'
            fullWidth
            color='secondary'
            disabled
            inputProps={{ 'aria-readonly': true }}
            value={inputItem.timeLabel ? inputItem.timeLabel : '未選択'}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='name'
            name='name'
            label='氏名'
            fullWidth
            color='secondary'
            value={inputItem.name}
            onChange={(e) => {
              console.log(e.target.value);
              setInputItem((item) => ({ ...item, name: e.target.value }));
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='kanaName'
            name='kanaName'
            label='ひらがな'
            fullWidth
            color='secondary'
            value={inputItem.kanaName}
            onChange={(e) =>
              setInputItem((item) => ({ ...item, kanaName: e.target.value }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='mailAddress'
            name='mailAddress'
            label='メールアドレス'
            fullWidth
            color='secondary'
            value={inputItem.mailAddress}
            onChange={(e) =>
              setInputItem((item) => ({ ...item, mailAddress: e.target.value }))
            }
            // helperText='メールアドレスを正しく入力してください'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='tel'
            name='tel'
            label='電話番号'
            fullWidth
            color='secondary'
            value={inputItem.tel}
            onChange={(e) =>
              setInputItem((item) => ({ ...item, tel: e.target.value }))
            }
          />
        </Grid>
      </Grid>
    </>
  );
}
