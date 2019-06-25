import { create } from "apisauce";
import { BASE_URL } from '../Config';

const URIS = {
    USER_DATA: "users",
};

const apiMonitor = response => {
	response.ok
		? console.log(
				"%c API_RESPONSE! %c" + response.config.url,
				"background: #222; color: #bada55; font-size:16px",
				"background:red;color:white;"
		  )
		: console.log(
				"%c API_RESPONSE! %c" + response.config.url,
				"background: #222; color: #ff7788; font-size:16px",
				"background:red;color:white;"
		  );
	console.log(response);
};

 export default createApiClient = (baseURL = BASE_URL) => {
	let api = create({
		baseURL,
		headers: {
			Accept: "application/json",
			"Cache-Control": "no-cache",
			"Content-Type": "application/json"
		},
		timeout: 15000
	});

	// add monitor for logging api response
	api.addMonitor(apiMonitor);

    const getUserData = payload => api.get(URIS.USER_DATA)
	//kickoff our api functions
	return {
		// setAuthorizationHeader,
		// api call functions
		getUserData
	};
};









