import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGNjNGMxZDk5ZjE4ZGJjNTA4ZjJjZDEwZDA4N2E1ZCIsInN1YiI6IjY0Nzk5YmU4ZTMyM2YzMDBlNTIzYmEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XGDudq6BjZCup4vIfAvyKOQTU39NOVul1tqU9SyUi5U'
	},
	
});