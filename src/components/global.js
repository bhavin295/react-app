let API_URL_CUSTOM = 'https://lacadenelle13008.fr.api.preprod.residenceone.com/api/'


if(process.env.NODE_ENV == 'development'){
	API_URL_CUSTOM = 'http://localhost:5000/api/';
}
else{
	API_URL_CUSTOM = 'https://lacadenelle13008.fr.api.preprod.residenceone.com/api/';
}

export const API_URL = API_URL_CUSTOM;




