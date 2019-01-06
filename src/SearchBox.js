import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className="pa2">
			<input 
				className="pa3 ba b--green bg-lightest-blue"
				type="search" 
				placeholder="search robots" 
				onChange={searchChange} // call onSearchChange fxn when searchbox changes
			/>
		</div>
	);
}

export default SearchBox;