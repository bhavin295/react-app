import { API_URL } from './../components/global'

const UserUtils = {

	login: async function (data) {
		return fetch(API_URL + 'user/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		}).then(async (response) => {			
			return await response.json();
		});
	},

	getAllUserList :  function(data){
		return fetch('http://jsonplaceholder.typicode.com/users',{
				method:'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					token: data,
				},
		}).then(async (response) => {
			return  response.json();
		});
},

}

module.exports = UserUtils;
