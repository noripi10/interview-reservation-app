import firebase from 'firebase/app';
import 'firebase/firestore';
import ENV from './Env.json';

if (!firebase.apps.length) {
	firebase.initializeApp(ENV.firebaseConfig);
}

export const db = firebase.firestore();

export const getSchedule = async () => {
	const snapshot = await db
		.collection('schedule')
		.where('remaining', '>', 0)
		.get();
	const schedule = snapshot.docs.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});
	return schedule;
};

export const addReservation = async (param) => {
	try {
		await db.collection('reservations').doc().set(param);
	} catch (err) {
		console.log({ err });
	}
};

export const updateSchedule = async (scheduleId) => {
	try {
		console.log({ scheduleId });
		const snapshot = await db.collection('schedule').doc(scheduleId).get();
		if (snapshot.exists) {
			const item = snapshot.data();
			const { remaining } = item;
			await db
				.collection('schedule')
				.doc(scheduleId)
				.update({
					remaining: remaining - 1,
				});
		} else {
			console.log('nothing');
		}
	} catch (err1) {
		console.log({ err1 });
	}
};

export default firebase;
