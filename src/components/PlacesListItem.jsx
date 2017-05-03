import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

const PlacesListItem = ({ photo, name, id, rating, vicinity}) => (
	<div className="row">
		<section className="col-xs-12 place-item">
			<div className="col-xs-12 col-sm-6 col-lg-4 col-lg-offset-1 text-center">
				{photo ? <img className="place-item__photo" src={`/api/photos/${photo}`} alt={name} /> : null}
			</div>
			<div className="col-xs-12 col-sm-6 col-lg-6">
				<h3>{name}</h3>

				<div>
					<StarRatingComponent
						name={`rating${id}`}
						editing={false}
						renderStarIcon={() => <span className="glyphicon glyphicon-star"></span>}
						starCount={5}
						value={rating}
					/>
				</div>
				Address: {vicinity}
			</div>
		</section>
	</div>
);

PlacesListItem.propTypes = {
	id: PropTypes.string,
	photo: PropTypes.string,
	name: PropTypes.string,
	rating: PropTypes.number,
	vicinity: PropTypes.string
};

PlacesListItem.defaultProps = {
	id: '',
	photo: null,
	name: '',
	rating: null,
	vicinity: ''
};

export default PlacesListItem;
