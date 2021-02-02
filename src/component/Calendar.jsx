import React from 'react';
import ReactCalendar from 'react-calendar';
import moment from 'moment';
import { useRecoilState } from 'recoil';
import { inputState } from '../store/store';

export const Calendar = React.memo(({ targetList }) => {
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
      value={inputItem.date && moment(inputItem.date).toDate()}
      onClickDay={(date) =>
        setInputItem((item) => ({
          ...item,
          date: moment(date).format('YYYY/MM/DD (ddd)'),
        }))
      }
      tileContent={getTileContent}
      showDoubleView={false}
      minDetail={'month'}
    />
  );
});
