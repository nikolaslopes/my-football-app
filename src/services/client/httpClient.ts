import axios from "axios";

import { sleep } from "../utils/sleep";

const apiUrl = process.env.REACT_APP_API_URL;
const apiToken = process.env.REACT_APP_API_TOKEN;

export const httpClient = axios.create({
	baseURL: apiUrl,
	headers: {
		"X-Auth-Token": apiToken,
	},
});

httpClient.interceptors.response.use(async (data) => {
	await sleep(500);
	return data;
});
