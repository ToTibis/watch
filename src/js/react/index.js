'use strict';
import React from 'react';
import {createRoot} from 'react-dom/client';
import Carousel from './carousel';

(function() {
	const rootElement = document.getElementById('js-react-carousel');
	if (rootElement) {
		try {
			createRoot(rootElement).render(<Carousel/>)
		} catch (e) {}
	}
})();

