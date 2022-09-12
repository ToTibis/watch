import Component from '../classes/Component';
import {$events} from '../helpers/events';
import debounce from 'lodash.debounce';
import variables from '../variables';
import {$dom} from '../helpers/dom';

const ROOT_ID = 'js-page-panels';
const FEEDBACK_ID = 'js-page-panels-feedback';
const FEEDBACK_TOGGLE_ID = 'js-page-panels-feedback-toggle';
const TO_UP_ID = 'js-page-panels-to-up';
const TO_UP_SHOW_DISTANCE = 300;
const {addClass, removeClass, hasClass, getParent} = $dom;

export default function () {

	const scrollHandler = debounce(function () {
		if (window.scrollY > TO_UP_SHOW_DISTANCE) {
			addClass('#'+TO_UP_ID, variables.classNames.active)
		} else {
			removeClass('#'+TO_UP_ID, variables.classNames.active)
		}
	}, variables.resizeDebounce);
	const toUpHandler = function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	};

	const setFeedbackView = function (view) {
		switch (view) {
			case 'open':
				addClass('#'+FEEDBACK_ID, variables.classNames.active);
				break;
			case 'closed':
				removeClass('#'+FEEDBACK_ID, variables.classNames.active);
				break;
		}
	};

	const feedbackPanelToggle = function () {
		const parent = getParent(this, '#'+FEEDBACK_ID);
		parent && hasClass(parent, variables.classNames.active)
			? setFeedbackView('closed')
			: setFeedbackView('open')
	};

	return new Component({
		name: 'panels',
		requiredTargets: ['#'+ROOT_ID, '#'+FEEDBACK_ID, '#'+TO_UP_ID],
		onInit() {

			scrollHandler();
			setFeedbackView('closed');
			$events
				.add('scroll', window, scrollHandler)
				.delegate
				.on('click', '#'+TO_UP_ID, toUpHandler)
				.on('click', '#'+FEEDBACK_TOGGLE_ID, feedbackPanelToggle)
		},
		onDestroy() {
			$events
				.remove('scroll', window, scrollHandler)
				.delegate
				.off('click', '#'+TO_UP_ID, toUpHandler)
				.off('click', '#'+FEEDBACK_TOGGLE_ID, feedbackPanelToggle)
		}
	})
}
