import React from 'react';
import ReactCalendar from 'react-calendar';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import { useRecoilState } from 'recoil';
import { inputState } from '../store/store';

const useStyles = makeStyles((theme) => ({
  calendar: {
    backgroundColor: '#fff',
  },
  calendarTile: {
    borderWidth: 0.5,
    borderColor: '#000',
    width: '300px',
  },
}));

export const Calendar = React.memo(({ targetList }) => {
  const classes = useStyles();
  const [inputItem, setInputItem] = useRecoilState(inputState);

  const getTileContent = ({ date, view }) => {
    return (
      <div>
        <span style={{ fontFamily: 'sans-serif' }}>
          {targetList.some((v) => v === moment(date).format('D')) ? '○' : '　'}
        </span>
      </div>
    );
  };

  return (
    <ReactCalendar
      locale='ja-JP'
      calendarType='US'
      className={classes.calendar}
      value={inputItem.date && moment(inputItem.date).toDate()}
      onClickDay={(date) =>
        setInputItem((item) => ({
          ...item,
          date: moment(date).format('YYYY/MM/DD (ddd)'),
        }))
      }
      tileClassName={classes.calendarTile}
      tileContent={getTileContent}
      showDoubleView={false}
      minDetail={'year'}
    />
  );
});
