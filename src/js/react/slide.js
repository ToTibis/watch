import React from 'react';
import Icon from './icon';

export default function CarouselSlide({src, icon}) {
	return (
		<a className='r-section__slide d-block' href='#' target='_blank'>
			<div className='r-section__image ratio'>
				<img className={'swiper-lazy'} data-src={src} alt=""/>
				<div className='swiper-lazy-preloader'/>
			</div>
			<Icon name={icon}/>
		</a>
	)
}
