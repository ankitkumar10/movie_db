import React, { useState } from 'react';
import {Stack, IconButton, InputBase, Button } from '@mui/material';
import "./Navbar.scss";
import logo from "../../assets/tmdblogo.jpeg"
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
	const [searchOpen, setSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const navigate = useNavigate();

	const handleSearchClick = () => {
		setHamburgerOpen(false)
		setSearchQuery('')
		setSearchOpen(true)
	}

	const handleHamburgerClick = () => {
		setSearchOpen(false)
		setHamburgerOpen(prev => !prev);
	}

	const handleSearchQuery = (e) => {
		if(e.key === "Enter") {
			setSearchOpen(false);
			navigate(`/collection/${searchQuery}`)
		}
	}

	
	return (
		
		<Stack  className={`navbar__container`}>
			<Stack className='navbar__main'  direction="row" justifyContent="space-between" alignItems="center">
				<Stack className='navbar__logo__container'>
					<Link to="/">
						<img src={logo && logo} loading="lazy"  alt="logo" className='navbar__logo'/>
					</Link>
				</Stack>
				<Stack className='navbar__menu__container' direction="row" spacing={2} alignItems="center">
					<Stack 
						className='navbar__menu__options' 
						direction="row" 
						spacing={2}
						sx={{display: {xs: "none", sm:"flex"}}}
						>
							<Stack><Link className='navbar__menu__options_btn' to={`/discover/movie`}>MOVIES</Link></Stack>
							<Stack><Link  className='navbar__menu__options_btn' to={`/discover/tv`}>TV</Link></Stack>
					</Stack>
					<Stack className='navbar__search__container'>
						<IconButton
							 className='navbar__icon__btn'
							  onClick={handleSearchClick}
								// disabled={}
								>
							<FaSearch className='navbar__menu__options_btn'/> 
						</IconButton>
					</Stack>
					<Stack className='navbar__hamburger__container' sx={{display: {xs: "flex", sm:"none"}}}>
						<IconButton className='navbar__icon__btn' onClick={handleHamburgerClick}>
						{hamburgerOpen ? <CloseIcon style={{color: 'white'}}/> :<MenuIcon sx={{color: "white"}} />}
						</IconButton>
					</Stack>
				</Stack>
			</Stack>
			{searchOpen && 
			<Stack className='navbar__search' direction="row">
			
				<InputBase
        sx={{ ml: 1, flex: 1, pl: "20px" }}
        placeholder="Search for a movie or a tv show"
        inputProps={{ 'aria-label': 'search field for movies or tv shows' }}
				value={searchQuery}
				onKeyDown={handleSearchQuery}
				onChange={e => setSearchQuery(e.target.value)}
      	/>
				<IconButton size='small' sx={{pr: "20px"}} onClick={() => setSearchOpen(false)}>
					<CloseIcon />
				</IconButton>
			</Stack>
			}
			{hamburgerOpen && 
			<Stack className='navbar__dropdown' justifyContent="flex-start" alignItems="center">
				<Link to={`/discover/movie`}>
					<Button fullWidth onClick={() => setHamburgerOpen(false)}>Movies</Button>
				</Link>
				<Link to={`/discover/tv`}>
					<Button fullWidth onClick={() => setHamburgerOpen(false)}>TV SHOWS</Button>
				</Link>
			</Stack>
			}
		</Stack>
		
	)
}

export default Navbar