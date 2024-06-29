import axios from "axios";

import { sleep } from "../utils/sleep";

export const httpClient = axios.create({
	baseURL: "http://localhost:8080",
});

httpClient.interceptors.response.use(async (data) => {
	await sleep(500);
	return data;
});
