import { atom } from 'recoil';

export const inputState = atom({
  key: 'inputState',
  default: {
    date: '',
    timeLabel: '',
    name: '',
    kanaName: '',
    mailAddress: '',
    tel: '',
  },
});

export const eventState = atom({
  key: 'eventState',
  default: [],
});
