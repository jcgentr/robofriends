import React from 'react';

// props.children === CardList; Scroll wraps CardList component
const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '5px solid darkgreen', height: '600px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;