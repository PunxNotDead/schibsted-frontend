import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PlacesListItem from '../components/PlacesListItem';
import Header from '../components/Header';
import Loader from '../components/Loader';
import NoResults from '../components/NoResults';

const mapStateToProps = state => ({
	places: state.places.list,
	listLoading: state.places.listLoading
});

const PlacesList = ({listLoading, places}) => (
	<div className="container">
		<Header />

		{listLoading
			? <Loader text="Loading places..." />
			: (
				places.length > 0
				? places.map((item, index) => (
					<PlacesListItem {...item} key={index} />
				))
				: <NoResults />
			)
		}
	</div>
);


PlacesList.propTypes = {
	places: PropTypes.array
};

PlacesList.defaultProps = {
	places: []
};

export default connect(mapStateToProps)(PlacesList);
