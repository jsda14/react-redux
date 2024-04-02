export const logger = (store) => (next) => (action) => {
	console.log(action);
	next(action);
}

export const featuting = (store) => (next) => (actionInfo) => {
	const featured = [{name: 'Eddie'}, ...actionInfo.action.payload];
	const updateActionInfo = {
		...actionInfo,
		action: {...actionInfo.action, payload: featured},
	};
	next(updateActionInfo);
}