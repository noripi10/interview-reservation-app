import React from 'react';
import FullCalendar, { Calendar } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { inputState, eventState } from '../store/store';

const useStyles = makeStyles((theme) => ({
  calendar: {
    backgroundColor: '#fff',
    width: '300px',
    height: '300px',
  },
}));

export const FCalendar = React.memo(() => {
  const classes = useStyles();
  const event = useRecoilValue(eventState);
  const setInputItem = useSetRecoilState(inputState);

  const handleEventClick = ({ event }) => {
    // console.log(event.id);
    const { start, end } = event;
    setInputItem((item) => ({
      ...item,
      id: event.id,
      date: moment(start).format('YYYY/MM/DD (ddd)'),
      time: moment(start).format('hh:mm'),
      timeLabel:
        moment(start).format('HH:mm') + '~' + moment(end).format('HH:mm'),
    }));
  };

  return (
    <div style={{ background: '#fff' }}>
      <FullCalendar
        locale='ja-JP'
        timeZone='local'
        themeSystem='bootstrap'
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          start: 'title',
          center: '',
          end: 'today prev,next',
        }}
        buttonText={{
          today: '本日',
        }}
        initialView='timeGridWeek'
        allDayContent={undefined}
        businessHours={{
          startTime: '8:00',
          endTime: '20:00',
        }}
        editable={true}
        selectable={true}
        events={event}
        eventClick={handleEventClick}
      />
    </div>
  );
});
