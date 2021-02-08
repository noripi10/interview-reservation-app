import React from 'react';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import Checkout from './component/Checkout';
import { RecoilRoot } from 'recoil';
import moment from 'moment';

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

function App() {
  return (
    <RecoilRoot>
      <Checkout />
    </RecoilRoot>
  );
}
export default App;
