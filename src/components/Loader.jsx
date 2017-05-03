import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({text}) => (
	<div className="col-xs-12 col-lg-8 col-lg-offset-2">
		<h3>{text}</h3>
	</div>
);

Loader.propTypes = {
	text: PropTypes.string
};

Loader.defaultProps = {
	text: 'Loading...'
}

export default Loader;
