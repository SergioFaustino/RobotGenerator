import React, { Component } from 'react';
import Deck from './Deck';
import SearchBox from './SearchBox.js'
import Scroll from './Scroll.js'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json() )
		.then (users => this.setState({robots : users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(
				robot => {return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());}
		);
		return (
			<div className='tc'>
				<h1 className='f1'>RobotFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<Deck robots={filteredRobots}/>
				</Scroll>
			</div>
		);	
	}
}

export default App;