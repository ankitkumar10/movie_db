import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../../utility/constants';
import axios from 'axios';

const initialState = {
	trending: [],
	whatspopular: [],
	toprated: [],
	status: "idle"
}

const apiRequest = axios.create({
  baseURL: BASE_URL,
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGNjNGMxZDk5ZjE4ZGJjNTA4ZjJjZDEwZDA4N2E1ZCIsInN1YiI6IjY0Nzk5YmU4ZTMyM2YzMDBlNTIzYmEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XGDudq6BjZCup4vIfAvyKOQTU39NOVul1tqU9SyUi5U'
	},
	
});

export const fetchTrendingAll = createAsyncThunk('movix/fetchTrendingAll', async (time="day") => {
	try {
		const response = await apiRequest.get(`/trending/all/${time}`);
		return response.data.results;
	} catch (err) {
		console.log(err)
		return err;
	}
})

export const fetchWhatspopular = createAsyncThunk('movix/fetchWhatspopular', async (type="movie") => {
	try {
		const response = await apiRequest.get(`/${type}/popular`);
		return response.data.results
	} catch (err) {
		console.log(err)
		return err;
	}
})

export const fetchTopRated = createAsyncThunk('movix/fetchTopRated', async (type="movie") => {
	try {
		const response = await apiRequest.get(`/${type}/top_rated`);
		return response.data.results
	} catch (err) {
		console.log(err)
		return err;
	}
});



export const apiSlice = createSlice({
	name:'movix',
	initialState,
	reducers: {
		 
	},
	extraReducers: builder => {
		builder.addCase(fetchTrendingAll.pending, (state, action) => {
			state.status = "loading"
		})
		builder.addCase(fetchTrendingAll.fulfilled, (state,action) => {
			state.status = "fulfilled"
			state.trending = [...action.payload]
		})
		builder.addCase(fetchWhatspopular.fulfilled, (state,action) => {
			state.whatspopular = [...action.payload]
		})
		builder.addCase(fetchTopRated.fulfilled, (state,action) => {
			state.toprated = [...action.payload]
		})
	}
})


export const getTrendingMovies = state => state.apiReducer.trending;
export const getWhatsPopular = state => state.apiReducer.whatspopular;
export const getTopRated = state => state.apiReducer.toprated
export const getStatus = state => state.apiReducer.status;

// export const getStatus = state => state.status;
export default apiSlice.reducer;