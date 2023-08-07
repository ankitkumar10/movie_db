import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	imageUrl: {}
}

export const configurationSlice = createSlice({
	name: "config",
	initialState,
	reducers: {
		setImageConfigs(state, action) {
			state.imageUrl = action.payload
		}
	}
})

export const getImageConfigs = state => state.configReducer.imageUrl;

export const { setImageConfigs } = configurationSlice.actions;

export default configurationSlice.reducer;