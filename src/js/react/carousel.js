import React, {useState} from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Lazy, default as SwiperCore, Navigation} from 'swiper';
import CarouselSlide from './slide';
import CarouselControls from './controls';
import variables from '../variables';

SwiperCore.use([ Lazy ]);

export default function Carousel() {

	const [slides] = useState([
		{
			imageName: 'armani.png',
			iconName: 'brand-emporio-armani-black',
			id: 1
		},
		{
			imageName: 'burberry.png',
			iconName: 'brand-burberry-black',
			id: 2
		},
		{
			imageName: 'casio.png',
			iconName: 'brand-casio',
			id: 3
		},
		{
			imageName: 'citizen.png',
			iconName: 'brand-citizen-black',
			id: 4
		},
		{
			imageName: 'wellington.png',
			iconName: 'brand-daniel-wellington',
			id: 5
		},
		{
			imageName: 'burberry.png',
			iconName: 'brand-burberry-black',
			id: 6
		},
		{
			imageName: 'casio.png',
			iconName: 'brand-casio',
			id: 7
		},
		{
			imageName: 'armani.png',
			iconName: 'brand-emporio-armani-black',
			id: 8
		},
	]);
	const [swiperOptions] = useState({
		spaceBetween: variables.windowWidth > variables.breakpoints.sm ? 37 : 15,
		slidesPerView: 6,
		lazy: {
			loadPrevNext: true
		},
		centeredSlides: true,
		centeredSlidesBounds: true,
		breakpoints: {
			0: {
				slidesPerView: 2
			},
			[variables.breakpoints.md]: {
				slidesPerView: 3
			},
			[variables.breakpoints.lg]: {
				slidesPerView: 4
			},
			[variables.breakpoints.xl]: {
				slidesPerView: 5
			},
			[variables.breakpoints.hd]: {
				slidesPerView: 6
			}
		}
	});

	return (
		<section className='r-section'>
			<Swiper className={'r-section__carousel d-flex flex-column'} {...swiperOptions}>

				<div className={'container order-1'}>
					<div className='row align-items-center pb-5'>
						<div className='col-lg-8'>
							<h2 className='text-center text-lg-start'>Популярные бренды</h2>
						</div>
						<div className='col-lg-4 text-lg-end d-none d-lg-block'>
							<CarouselControls className={'d-inline-block'}/>
						</div>
					</div>
				</div>
				<div className='d-lg-none'>
					<CarouselControls/>
				</div>
				{
					slides.map(slide => (
						<SwiperSlide key={slide.id}>
							<CarouselSlide src={'../img/home/products/'+slide.imageName} icon={slide.iconName}/>
						</SwiperSlide>
					))
				}
			</Swiper>
			<div className="container pt-4 pt-md-5">
				<div className="row">
					<div className="col-auto mx-auto">
						<a href="#" target='_blank' className={'button button--primary'}>Показать все бренды</a>
					</div>
				</div>
			</div>
		</section>
	)
}
