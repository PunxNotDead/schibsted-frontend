import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const PlacesListItem = (props) => (
	<div className="row">
		<section className="col-xs-12 place-item">
			<div className="col-xs-12 col-sm-6 col-lg-4 col-lg-offset-1 text-center">
				{props.item.photo ? <img src={`/api/photos/${props.item.photo}`} style={{width: '300px'}} alt={props.item.name} /> : null}
			</div>
			<div className="col-xs-12 col-sm-6 col-lg-6">
				<h3>{props.item.name}</h3>

				<div>
					<StarRatingComponent
						name={`rating${props.item.id}`}
						editing={false}
						renderStarIcon={() => <span className="glyphicon glyphicon-star"></span>}
						starCount={5}
						value={props.item.rating}
					/>
				</div>
				Address: {props.item.vicinity}
			</div>
		</section>
	</div>
);

export default PlacesListItem;