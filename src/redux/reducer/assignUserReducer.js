import _ from 'lodash';

let initialState = {
	assignUser: "No user assigned..."
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ASSIGN_USER':
			return Object.assign({}, state, { assignUser: action.response });
		default:
			return state;
	}
};