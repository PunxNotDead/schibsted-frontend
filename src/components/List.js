import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadPlaces } from '../actions/places';

const mapStateToProps = state => ({ places: state.places.list });
const mapDispatchToProps = dispatch => bindActionCreators({ loadPlaces }, dispatch);


class List extends Component {
	componentDidMount() {
		this.props.loadPlaces('beer');
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="app">
							<h2>Bars list</h2>
						</div>

						<div className="input-group">
							<input type="text" className="form-control" placeholder="Some words for filtering..." aria-describedby="basic-addon-search" />
						</div>
					</div>

					{this.props.places.map(item => (
						<div className="row" key={item.id}>
							{JSON.stringify(item)}
						</div>
					))}
				</div>
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