import { INCREMENT, DECREMENT } from '../constant';
const initCount = 0;

export default function countReducer(preState = initCount, action) {
	let { type, data } = action;
	switch (type) {
		case INCREMENT:
			return preState + data;
		case DECREMENT:
			return preState - data;
		default:
			return preState;
	}
}
