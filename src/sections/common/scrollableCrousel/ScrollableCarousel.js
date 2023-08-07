import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import React from 'react';

const ScrollableCarousel = ({children}) => {
	return (
		<ScrollingCarousel swiping={true}>{children}</ScrollingCarousel>
	)
}

export default ScrollableCarousel