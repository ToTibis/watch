import React from 'react';
import Icon from './icon';
import {useSwiper} from 'swiper/react';

export default function CarouselControls({className}) {
	const swiper = useSwiper();

	return <div className={'r-section__controls' + (className ? ' '+className : '')}>
		<div className="row gx-5">
			<div className="col-auto">
				<button type='button' className='r-section__control' onClick={() => swiper.slidePrev()}>
					<Icon name={'prev'} className='d-none d-lg-block'/>
					<Icon name={'arrow-left'} className='d-lg-none'/>
				</button>
			</div>
			<div className="col-auto">
				<button type='button' className='r-section__control' onClick={() => swiper.slideNext()}>
					<Icon name={'next'} className='d-none d-lg-block'/>
					<Icon name={'arrow-right'} className='d-lg-none'/>
				</button>
			</div>
		</div>
	</div>
}
