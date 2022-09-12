import Component from '../../classes/Component';
import Swiper, { Pagination, Lazy, EffectFade } from 'swiper';
import {$dom} from '../../helpers/dom';
import {isElement} from '../../helpers/_utilities';

const {each, get} = $dom;

const ROOT_ID = 'js-home-intro-carousel';
const PRELOADER_CLASSNAME = 'js-carousel-preloader';

export default function () {

	return new Component({
		name: 'introCarousel',
		requiredTargets: '#'+ROOT_ID,
		onInit() {
			const target = (this.targets.length > 0 ? this.targets[0] : null);

			if (isElement(target)) {
				const swiperEl = get('.swiper', target);
				if (isElement(swiperEl)) {
					this.swiper = new Swiper(swiperEl, {
						modules: [Pagination, Lazy, EffectFade],
						lazy: {
							preloaderClass: PRELOADER_CLASSNAME
						},
						effect: 'fade',
						fadeEffect: {
							crossFade: true
						},
						pagination: {
							el: '#'+ROOT_ID+' .swiper-pagination',
							type: 'bullets',
							clickable: true
						},
					});
				}
			}
		},
		onDestroy() {
			this.swiper = null;
		}
	})
}
