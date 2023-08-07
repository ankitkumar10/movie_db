import React, {useEffect} from 'react';
import Hero from '../hero/Hero';
import Trending from '../trending/Trending';
import WhatsPopular from '../whatspopular/WhatsPopular';
import TopRated from '../toprated/TopRated';

const Main = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])
	
	return (
		<>
			<Hero />
			<Trending />
			<WhatsPopular />
			<TopRated />
		</>
	)
}

export default Main