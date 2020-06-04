import axios from "axios/dist/axios";

export default axios.create({
	baseURL: "http://localhost:2222/api/",
	timeout: 4000,
	withCredentials: true,
});
