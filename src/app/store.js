import { configureStore } from '@reduxjs/toolkit';
import apiReducer from "../features/api/apiSlice";
import configReducer from "../features/api/configurationSlice";
import itemDetailsReducer from "../features/api/itemDetailsSlice";

export default configureStore({
  reducer: {
		apiReducer,
		configReducer,
		itemDetailsReducer
	},
})