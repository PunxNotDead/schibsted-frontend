import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadPlaces } from '../actions/places';

const mapDispatchToProps = dispatch => bindActionCreators({ loadPlaces }, dispatch);

class Filter extends Component {
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
			<div className="input-group">
				<span className="input-group-addon" id="addon-filter">Filter</span>
				<input type="text" className="form-control" placeholder="Some words for filtering..." onChange={this.queryChanged} aria-describedby="addon-filter" />
			</div>
		);
	}
}

Filter.propTypes = {
	query: PropTypes.string
}

Filter.defaultProps = {
	query: ''
}

export default connect(null, mapDispatchToProps)(Filter);
