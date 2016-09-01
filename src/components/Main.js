// require('normalize.css/normalize.css');

import React from 'react';
import style from './main.scss'
import Logo from './logo';
import Menu from './menu';
import Slider from './slider';
import Articles from './articles';
import Info from './info';
import Footer from './footer';

class AppComponent extends React.Component {
	render() {
		return (
			<div className={style.index}>
				<Logo />
				<Menu />
				<Slider />
				<Articles />
				<Info />
				<Footer />
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
