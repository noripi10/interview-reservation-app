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
}));

export const Calendar = React.memo(({ targetList }) => {
  const classes = useStyles();
  const [inputItem, setInputItem] = useRecoilState(inputState);

  const getTileContent = ({ date, view }) => {
    return (
      <div>
        <span className='tile-content'>
          {targetList.some((v) => v === moment(date).format('D')) ? '2' : '　'}
        </span>
      </div>
    );
  };

  const getTIleClassName = ({ activeStartDate, date, view }) => {
    let className = 'calendar-tile';
    if (view === 'month' && date.getDay() === 6) {
      className += ' saturday';
    }
    if (!targetList.some((v) => v === moment(date).format('D'))) {
      className += ' tile-disable';
    }
    return className;
  };

  return (
    <ReactCalendar
      locale='ja-JP'
      calendarType='US'
      className={classes.calendar}
      prevLabel={'<'}
      prev2Label={'<<'}
      nextLabel={'>'}
      next2Label={'>>'}
      value={inputItem.date && moment(inputItem.date).toDate()}
      onClickDay={(date) =>
        setInputItem((item) => ({
          ...item,
          date: moment(date).format('YYYY/MM/DD (ddd)'),
        }))
      }
      // tileClassName={classes.calendarTile}
      tileClassName={getTIleClassName}
      tileContent={getTileContent}
      showDoubleView={false}
      minDetail={'year'}
    />
  );
});
