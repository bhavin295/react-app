
export const setUserList = arr => ({
	type: 'SET_USER_LIST',
	response: arr,
});

export const getAssignUser = obj => ({
	type: 'GET_ASSIGN_USER',
	response: obj,
});

export const getNewPassword = obj => ({
	type: 'GET_NEW_PASSWORD',
	response: obj,
});