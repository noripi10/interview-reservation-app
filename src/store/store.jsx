import { atom, selector } from 'recoil';

export const inputState = atom({
  key: 'inputState',
  default: {},
});

export const eventState = atom({
  key: 'eventState',
  default: [],
});
