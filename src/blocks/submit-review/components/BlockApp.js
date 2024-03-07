import React from "react";
import AddReviewForm from "./AddReviewForm";
import ReviewList from "./ReviewList";

export default class BlockApp extends React.Component {
	state = {
		reviews: [],
		loggedIn: null,
	};
	addReview(newReview){
		const review = new wp.api.models.Review(newReview)
		review.save().done(data=>{
			console.log('saved!', data)
		}).fail(jqXHR=>{
			console.error('failed!', jqXHR)
		});
	}
	getReviews() {
		// by default, this gives us 10
		const reviewCollection = new wp.api.collections.Review();
		reviewCollection.fetch()
			.done(data=>{
			console.log('saved!', data, reviewCollection);
			this.setState({reviews:reviewCollection.models})
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
		this.getReviews();
		this.getLoggedInUser()
	}
	render() {
		return (
			<div>
				<h3>Latest Reviews</h3>
				<ReviewList reviews={this.state.reviews}/>

				<hr />
				<h3>Submit a Review</h3>
				{this.state.loggedIn === true && <AddReviewForm addReview={reviewObj => this.addReview(reviewObj)}/>}
				{this.state.loggedIn === false && <div className='error-msg'>You must be logged in to submit a review</div>}
			</div>
		);
	}
}
