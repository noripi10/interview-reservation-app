import React from 'react';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import Checkout from './component/Checkout';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Checkout />
    </RecoilRoot>
  );
}
export default App;
