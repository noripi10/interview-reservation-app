import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { inputState, eventState } from '../store/store';

// const useStyles = makeStyles((theme) => ({
// 	calendar: {
// 		backgroundColor: '#fff',
// 		width: '300px',
// 		height: '300px',
// 	},
// }));

export const FCalendar = React.memo(() => {
	// const classes = useStyles();
	const [events, setEvents] = useRecoilState(eventState);
	const setInputItem = useSetRecoilState(inputState);

	const createEventContent = (e) => {
		const { remaining } = e.event.extendedProps;
		return (
			<span>
				<div>{e.timeText}</div>
				<div>{`残 ${remaining} 枠`}</div>
			</span>
		);
	};

	const handleEventClick = ({ event }) => {
		const { start, end } = event;

		setInputItem((item) => ({
			...item,
			id: event.id,
			date: moment(start).format('YYYY/MM/DD (ddd)'),
			time: moment(start).format('HH:mm'),
			timeLabel:
				moment(start).format('HH:mm') + '~' + moment(end).format('HH:mm'),
		}));

		const newEvents = events.map((v) => {
			if (v.id === event.id) {
				return { ...v, color: '#e97878' };
			} else {
				return { ...v, color: '#9b5151' };
			}
		});
		setEvents(newEvents);
	};

	return (
		<div style={{ background: '#fff' }}>
			<FullCalendar
				locale="ja-JP"
				timeZone="local"
				themeSystem="bootstrap"
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				headerToolbar={{
					start: 'title',
					center: '',
					end: 'today prev,next',
				}}
				buttonText={{
					today: '本日',
				}}
				initialView="timeGridWeek"
				allDaySlot={false}
				businessHours={{
					startTime: '8:00',
					endTime: '20:00',
				}}
				editable={true}
				selectable={true}
				events={events}
				eventColor="#9b5151"
				eventContent={(e) => createEventContent(e)}
				eventClick={handleEventClick}
			/>
		</div>
	);
});
