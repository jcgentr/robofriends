import React from 'react';

const Card = ({ id, name, email }) => { // destructing props; ES6
	
	return ( // only JSX: html-like syntax using JS; JSexpressions use { }
		// code must be wrapped in one div element to return; src uses JS templated string
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`}/> 
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;