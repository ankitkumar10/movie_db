import { axiosInstance } from "./constants";
import { setImageConfigs } from "../features/api/configurationSlice";
import { Stack, Skeleton } from "@mui/material";

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

export const skeleton =  (
	<Stack className='skeleton-container' direction="row" spacing={2}>
					<Skeleton variant="rectangular" width={140} height={200}/> 
					<Skeleton variant="rectangular" width={140} height={200}/> 
					<Skeleton variant="rectangular" width={140} height={200}/> 
					<Skeleton variant="rectangular" width={140} height={200}/> 
					<Skeleton variant="rectangular" width={140} height={200}/> 
	</Stack>
)