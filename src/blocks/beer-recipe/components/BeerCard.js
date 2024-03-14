import React, {useState} from "react";
import {IoBeerOutline} from "react-icons/io5";
export default class BeerCard extends React.Component {
state = {
	visible: false,
	favorite: false,
}
toggleVisible = () => {
	this.setState({
		visible: !this.state.visible,
	})
}

toggleFavorite = () => {
	this.setState({
		favorite: !this.state.favorite
	})
}



	render(){

		let {title, flavor, description, type, image, percentage} = this.props
		return (
			<div className={this.state.visible ? "beer-card-hover" : "beer-card"} onMouseEnter={()=>this.toggleVisible()} onMouseLeave={()=>this.toggleVisible()}>

				<h2 className="beer-title">{title}</h2>
				<div className="beer-image-container"><IoBeerOutline className="beer-icon"/></div>

				<div className="flex-container">
					<h4 className="beer-type">Type: {type}</h4>
				<h4 className="beer-flavor">Flavor: {flavor}</h4>
				</div>
				<div className={this.state.visible ? "beer-description" : "beer-description-hidden"}>{description}<div className="abv">ABV: {percentage}%</div></div>


				{/*<div className="review-content" dangerouslySetInnerHTML={{__html: type}}></div>*/}
			</div>
		)
	}

}
