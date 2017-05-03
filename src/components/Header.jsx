import React from 'react';

import Filter from './Filter';

const Header = () => (
	<div className="row">
		<div className="col-xs-12 col-lg-8 col-lg-offset-2">
			<h2>Bars list</h2>

			<Filter />
		</div>
	</div>
);

export default Header;
