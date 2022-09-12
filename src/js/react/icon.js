import React from 'react';

export default function Icon({name, className, width, height}) {

	return <svg
		className={'svg-icon' + (className ? ' '+className : '')}
		width={width || null}
		height={height || null}
	>
		<use xlinkHref={'img/sprite.svg#' + name} />
	</svg>
}

