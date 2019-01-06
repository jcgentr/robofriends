import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {       // need state (things that change) for searchbox functionality
			robots: [],
			searchfield: ''
		}
	}
	// non-pre-built React functions need arrow syntax for correct this reference
	onSearchChange = (event) => {
		// setState is a prebuilt setter fxn in React; go through setter
		this.setState({ searchfield: event.target.value });
	}

	componentDidMount() {
		// json placeholder users/robots
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}

	render() {
		// clean up using destructuring
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		// if robots object array takes time to load; ternary operator
		// length 0 == false; turn it to true
		return !robots.length ? 
			<h1>Loading...</h1> :
			(
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={ this.onSearchChange }/>
					<Scroll> 
						<CardList robots={ filteredRobots } />
					</Scroll>
				</div>
			);	
	}	
}

export default App;