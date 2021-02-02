import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { useRecoilState } from 'recoil';
import { inputState } from '../store/store';
import { Calendar } from './Calendar';

moment.locale('ja', {
  weekdays: [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日',
  ],
  weekdaysShort: ['日', '月', '火', '水', '木', '金', '土'],
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
}));

const targetList = ['1', '2', '4', '10', '16', '22', '26'];

export default function AddressForm() {
  const classes = useStyles();
  const [inputItem, setInputItem] = useRecoilState(inputState);

  return (
    <React.Fragment>
      <Typography gutterBottom>・カレンダーから日付を選択して下さい</Typography>
      <div style={{ marginBottom: 10, display: 'flex', flexDirection: 'row' }}>
        <Calendar targetList={targetList} />
        <span style={{ fontFamily: 'sans-serif', marginLeft: 10 }}>
          ○：空き
          <br />
        </span>
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
          <FormControl className={classes.formControl} fullWidth>
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
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='姓'
            fullWidth
            color='secondary'
            value={inputItem.lastName}
            onChange={(e) => {
              console.log(e.target.value);
              setInputItem((item) => ({ ...item, lastName: e.target.value }));
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='名'
            fullWidth
            color='secondary'
            value={inputItem.firstName}
            onChange={(e) =>
              setInputItem((item) => ({ ...item, firstName: e.target.value }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='address'
            name='address'
            label='メールアドレス'
            fullWidth
            color='secondary'
            value={inputItem.address}
            onChange={(e) =>
              setInputItem((item) => ({ ...item, address: e.target.value }))
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
    </React.Fragment>
  );
}
