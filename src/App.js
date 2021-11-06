import React, {Component} from 'react';
import {robots} from './robots';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import './index.css'

class App extends Component{
	constructor()
	{
		super();
		this.state = {
			robots: robots,
			searchfields:""
		}
	}

	onSearchChange=(event)=>
	{
		this.setState({searchfields: event.target.value});
		// console.log(event.target.value);
		// const filterRobots = this.state.robots.filter(robots=>{
			
		// 	const str = robots.name.toLowerCase();
		// 	// console.log(str);
		// 	// str.includes(this.state.searchfields.toLowerCase());
		// 	return str.includes(this.state.searchfields.toLowerCase());
		// })

		// console.log(filterRobots);
	}

	render(){ 

		const filterRobots = this.state.robots.filter(robots=>{
			
			const str = robots.name.toLowerCase();
			// console.log(str);
			// str.includes(this.state.searchfields.toLowerCase());
			return str.includes(this.state.searchfields.toLowerCase());
		})

		return(
			<div className = 'tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				{/*<CardList robots = {robots} />*/}
				{/*<CardList robots = {this.state.robots} />*/}
				<CardList robots = {filterRobots} />
			</div>
			);
	}
}

export default App; 