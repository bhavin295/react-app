import _ from 'lodash';

let initialState = {
	password: 'test@user2019'
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_NEW_PASSWORD':
			return Object.assign({}, state, { password: action.response });
		default:
			return state;
	}
};