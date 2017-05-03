import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadPlaces } from '../actions/places';
import PlacesListItem from './PlacesListItem';

const mapStateToProps = state => ({
	places: state.places.list,
	listLoading: state.places.listLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadPlaces }, dispatch);


class List extends Component {
	constructor(props) {
		super(props);

		this.queryChanged = this.queryChanged.bind(this);
	}

	componentDidMount() {
		this.props.loadPlaces(this.props.query);
	}

	queryChanged(event) {
		this.props.loadPlaces(event.target.value);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-lg-8 col-lg-offset-2">
						<h2>Bars list</h2>

						<div className="input-group">
							<span className="input-group-addon" id="addon-filter">Filter</span>
							<input type="text" className="form-control" placeholder="Some words for filtering..." onChange={this.queryChanged} aria-describedby="addon-filter" />
						</div>
					</div>
				</div>

				{this.props.listLoading
					? (
						<div className="col-xs-12 col-lg-8 col-lg-offset-2">
							<h3>Loading items...</h3>
						</div>
					)
					: this.props.places.length > 0
						? this.props.places.map((item, index) => (
							<PlacesListItem item={item} key={index} />
						))
						: (
							<div className="col-xs-12 col-lg-8 col-lg-offset-2">
								<h2>No results... :(</h2>
							</div>
						)
				}
			</div>
		)
	}
}

List.propTypes = {
	query: PropTypes.string,
	places: PropTypes.array
};

List.defaultProps = {
	query: '',
	places: []
};

export default connect(mapStateToProps, mapDispatchToProps)(List);