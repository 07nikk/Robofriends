import React, {Component} from 'react';
// import {robots} from './robots';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import './index.css' 
import Scroll from './Scroll'
class App extends Component{
	constructor()
	{
		super();
		this.state = {
			robots: [],
			searchfields:""
		}
	
	}

componentDidMount(){
	// fetch is tool comes with browser to make requests
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users =>this.setState({robots:users}));
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

		if(this.state.robots.length===0){
			return <h1>Loading</h1>
		}
		else
		{

			return(
				<div className = 'tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					{/*<CardList robots = {robots} />*/}
					{/*<CardList robots = {this.state.robots} />*/}
					<Scroll>
						<CardList robots = {filterRobots} />
					</Scroll>
				</div>
				);
		}
	}
}

export default App; 