import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utility/constants";
import { BASE_URL } from "../../utility/constants";

const initialState = {
	itemDetails: ({
		loading: null,
		data: {}
	}),
	crewDetails: {},
	officalVideos: {}
}

export const fetchItemDetails = createAsyncThunk('itemDetails/fetchItemDetails', async (obj) => {
	try {
		const response = await axiosInstance.get(`${BASE_URL}/${obj.section}/${obj.id}`);
		return response.data
	}catch(err) {
		console.log(err)
	}
})

export const fetchCrewDetails = createAsyncThunk('itemDetails/fetchCrewDetails', async(obj) => {
	try {
		const response = await axiosInstance.get(`${BASE_URL}/${obj.section}/${obj.id}/credits`);
		return response.data
	}catch(err) {
		console.log(err)
	}
})

export const fetchOfficialVideos = createAsyncThunk('itemDetails/fetchOfficialVideos', async (obj) => {
	// console.log(section, id)
	try {
		const response = await axiosInstance.get(`/${obj.section}/${obj.id}/videos`);
		// let trailer = null;
		// trailer = response.data.results.find(item => item.name === "Main Trailer")
		// console.log(trailer)
		// if(!trailer) {
		// 	trailer = response.data.results.find(item => item.name.includes("Trailer" || "Teaser"));
		// }
		return response.data.results
	
	} catch (err) {
		console.log(err)
	}
})


export const itemDetailsSlice = createSlice({
	name:"itemDetails",
	initialState,
	reducers:{

	},
	extraReducers: builder => {
		builder.addCase(fetchItemDetails.pending, (state,action) => {
			state.itemDetails = {
				...state.itemDetails,
				loading: true
			}
		})
		builder.addCase(fetchItemDetails.fulfilled, (state,action) => {
			state.itemDetails = {
				...state.itemDetails,
				data: action.payload,
				loading: false
			}
			// state.itemDetails = action.payload
		})
		
		builder.addCase(fetchCrewDetails.fulfilled, (state,action) => {
			state.crewDetails = action.payload;
		})
		builder.addCase(fetchOfficialVideos.fulfilled, (state, action) => {
			state.officalVideos = action.payload
		})
	}
	
})

export const getItemDetails = state => state.itemDetailsReducer.itemDetails;
export const getCrewDetails = state => state.itemDetailsReducer.crewDetails;
export const getOfficialVideos = state => state.itemDetailsReducer.officalVideos;

export default itemDetailsSlice.reducer;