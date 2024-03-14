import React from "react";
import BeerCard from "./BeerCard";

export default class BeerList extends React.Component {
	render(){
		return (
			<div className="beer-list">

				{this.props.beers.map(beer => (
					<BeerCard title={beer.attributes.title.rendered}
							  type={beer.attributes.acf.beer_type}
							  description={beer.attributes.acf.beer_description}
							  flavor={beer.attributes.acf.beer_flavor}
							  image={beer.attributes.acf.beer_image}
							  percentage={beer.attributes.acf.beer_percentage}

							  />
				))}
			</div>
		)
	}

}
