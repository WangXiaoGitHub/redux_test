/**
 * 该文件专门为Count组件生成action对象
 */
export const createIncrementAction = (data) => ({ type: 'increment', data });
export const createDecrementAction = (data) => ({ type: 'decrement', data });
export const createIncrementSyncAction = (data, time) => {
	return (dispatch) => {
		setTimeout(function () {
			dispatch(createIncrementAction(data));
		}, time);
	};
};
