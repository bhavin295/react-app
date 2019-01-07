import _ from 'lodash';

let initialState = {
	users: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER_LIST':
			return Object.assign({}, state, { users: action.response });
		default:
			return state;
	}
};


