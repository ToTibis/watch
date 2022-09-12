import Page from '../../classes/Page';
import introCarousel from './introCarousel';

const homePage = new Page({
  name: 'home',
  rootElementId: 'js-page-home',
	onInit(){
		this.addComponent(introCarousel)
	}
});

export default homePage;
