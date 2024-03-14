import React from "react";

export default class AddBeerForm extends React.Component {
	state = {
		title: '',
		image: '',
		type: '',
		description: '',
		flavor: '',
		percentage: 0,



	};

	addBeer(e) {
		e.preventDefault();

		const newBeer = {
			title: this.state.title,
			acf: {
				beer_type: this.state.type,
				beer_image: this.state.image,
				beer_description: this.state.description,
				beer_flavor: this.state.flavor,
				beer_percentage: this.state.percentage,


			},

			// maybe you should validate better before doing this?
			status: 'publish',
		}

		// we can't assume any props are provided
		// ?. only calls the method if it exists
		this.props.addBeer?.(newBeer);
	}

	render() {
		return (
			<form
				className="beer-review-form"
				onSubmit={e => this.addBeer(e)}
			>
				<div className="beer-form-entry">
					<label>
						Title:
						<input type="text"
							   value={this.state.title}
							   onInput={e => this.setState({title: e.target.value})}
							   required
						/>
					</label>
				</div>

				<div className="beer-form-entry">
					<label>
						Percentage:
						<input type="number"
							   value={this.state.percentage}
							   onInput={e => this.setState({percentage: e.target.value})}
							   required
						/>
					</label>
				</div>


				<div className="beer-form-entry">
					<label>
						Type:
						<input type="text"
							   value={this.state.type}
							   onInput={e => this.setState({type: e.target.value})}
							   required
						/>
					</label>
				</div>
				<div className="beer-form-entry">
					<label>
						Description:
						<input type="text"
							   value={this.state.description}
							   onInput={e => this.setState({description: e.target.value})}
							   required
						/>
					</label>
				</div>
				<div className="beer-form-entry">
					<label>
						Flavor:
						<input type="text"
							   value={this.state.flavor}
							   onInput={e => this.setState({flavor: e.target.value})}
							   required
						/>
					</label>
				</div>



				<button className="submit-beer-button" type="submit">Add Beer</button>
			</form>
		);
	}

};
