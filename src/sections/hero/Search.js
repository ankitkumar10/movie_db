import React, {useState} from 'react';
import { Stack, InputBase, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


const Search = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState('')

	const handleSearchQuery = (e) => {
		if(e.key === "Enter") {
			navigate(`/collection/${searchQuery}`)
		}
	}
	return (
		<Stack className='hero__search__container' direction="row" justifyContent="center" sx={{mt: "40px", p: {xs: "0 20px", sm:"0 40px", md: "0 80px"}}} alignItems="center" gap={0}> 
				<Stack className='hero__search__bar'  >
					<InputBase
					sx={{ ml: 1, flex: 1, backgroundColor: "white" , borderRadius: "50px 0 0 50px", p: "10px"}}
					placeholder={"Search for a movie or a tv show"}
					inputProps={{ 'aria-label': 'search field for movies or tv shows' }}
					onKeyDown={handleSearchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					value={searchQuery}
					/>
				</Stack>
				<Stack className='hero__close__btn' alignItems="center" justifyContent="flex-start" sx={{
					borderRadius: "0 50px 50px 0", width: {xs: "15%", sm: "20%", md:"25%"}
				}}>
					<IconButton onClick={() => setSearchQuery('')}>
						<CloseIcon />
					</IconButton>
				</Stack>
			</Stack>
	)
}

export default Search