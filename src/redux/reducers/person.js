import { ADD_PERSON } from '../constant';
const initState = [];
export default function Person(preState = initState, action) {
	let { type, data } = action;
	switch (type) {
		case ADD_PERSON:
			return [data, ...preState];
		default:
			return preState;
	}
}
