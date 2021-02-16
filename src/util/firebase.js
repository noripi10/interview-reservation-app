import firebase from 'firebase';
import 'firebase/firestore';
import ENV from './Env.json';

if (!firebase.apps.length) {
  firebase.initializeApp(ENV.firebaseConfig);
}

export const addData = async (param) => {
  try {
    const db = firebase.firestore();
    await db.collection('reservations').doc().set(param);
  } catch (err) {
    console.log({ err });
  }
};

export default firebase;
