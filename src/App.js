import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; // {robots} called destructuring (need if export >= 1 from js file)
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {       // need state (things that change) for searchbox functionality
			robots: robots,
			searchfield: ''
		}
	}
	// non-pre-built React functions need arrow syntax for correct this reference
	onSearchChange = (event) => {
		// setState is a prebuilt setter fxn in React; go through setter
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<CardList robots={ filteredRobots } />
			</div>
		);
	}	
}

export default App;