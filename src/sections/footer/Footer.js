import { Stack, Typography } from '@mui/material'
import React from 'react'
import "./Footer.scss";
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
	return (
		<Stack className='footer__container' spacing={2}>
			<Stack className='footer__links' direction="row" gap={2} justifyContent="center" sx={{fontSize:"12px"}}>
				<Link to="/">Terms Of Use</Link>
				<Link to="/">Privacy Policy</Link>
				<Link to="/">About</Link>
				<Link to="/">Blog</Link>
				<Link to="/">FAQ</Link>
			</Stack>
			<Stack className='footer__text' justifyContent="center" textAlign="center">
				<Typography variant='body2' sx={{fontSize:"12px", opacity:"0.5"}}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</Typography>
			</Stack>
			<Stack className='footer__socialmedia' direction="row" justifyContent="center" spacing={2}>
				<Link to="/"><FacebookIcon /></Link>
				<Link to="/"><InstagramIcon /></Link>
				<Link to="/"><TwitterIcon /></Link>
				<Link to="/"><LinkedInIcon /></Link>
			</Stack>
		</Stack>
	)
}

export default Footer