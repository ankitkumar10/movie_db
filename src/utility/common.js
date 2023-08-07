import { axiosInstance } from "./constants";
import { setImageConfigs } from "../features/api/configurationSlice";

export const getConfigurationDetails = (async (dispatch) => {
	try {
		const response = await axiosInstance.get(`/configuration`)
		const imageUrl = {
			backdrop: response.data.images.secure_base_url + "original",
			poster: response.data.images.secure_base_url + "original",
			profile: response.data.images.secure_base_url + "original",
		}
		dispatch(setImageConfigs(imageUrl))
	}catch(err) {
		console.log(err)
	}
});