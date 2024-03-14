import React from "react";
import BeerList from "./BeerList";
import AddBeerForm from "./AddBeerForm";

export default class BlockApp extends React.Component {
	state = {
		beers: [],
		loggedIn: null,
	};
	addBeer(newBeer){
		const beer = new wp.api.models.Beer(newBeer)
		beer.save().done(data=>{
			console.log('saved!', data)
			this.getBeers();
		}).fail(jqXHR=>{
			console.error('failed!', jqXHR)
		});
	}
	getBeers() {
		// by default, this gives us 10
		const beerCollection = new wp.api.collections.Beer();
		beerCollection.fetch()
			.done(data=>{
				console.log('saved!', data, beerCollection);
				this.setState({beers:beerCollection.models})
			}).fail(jqXHR=>{
			console.error('failed!', jqXHR)
		});
	}

	getLoggedInUser(){
		const user = new wp.api.models.UsersMe(); // get logged in user
		user.fetch()
			.done(user => {

				// 	logged in
				this.setState({loggedIn:true});
			})
			.fail(jqXHR => {
				// 	not logged in
				this.setState({loggedIn:false});
			})
	}
	componentDidMount(){
		this.getBeers();
		this.getLoggedInUser()
	}
	render() {
		return (
			<div className="block-body">
				<h3 className="submit-beer-title">Beer List</h3>
				<BeerList beers={this.state.beers}/>

				<div className="submit-beer-form">
				<h3 className="submit-beer-title">Submit a Beer</h3>
				{this.state.loggedIn === true && <AddBeerForm addBeer={beerObj => this.addBeer(beerObj)}/>}
				{this.state.loggedIn === false && <div className='error-msg'>You must be logged in to submit a beer</div>}
				</div>
			</div>
		);
	}
}
