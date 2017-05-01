import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadPlaces } from '../actions/places';

const mapStateToProps = state => ({ places: state.places });
const mapDispatchToProps = dispatch =>  bindActionCreators({ loadPlaces }, dispatch);


class List extends Component {
	componentDidMount() {
		this.props.loadPlaces('234234');
	}

	render() {
		return (
			<div>
				<div className="app">
					<h2>Hello, 123123123213</h2>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-xs-4">
							1
				</div>

						<div className="col-xs-4">
							2
				</div>

						<div className="col-xs-4">
							3
				</div>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List);