'use strict';

import React from 'react';
import styles from './main.scss';
// require('styles//Menu.scss');

class MenuComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			breakpoints: [
				{ name: 'phonePortrait', min: 0, max: 414 },
				{ name: 'phoneLandscape', min: 415, max: 667 },
				{ name: 'tabletPortrait', min: 668, max: 768 },
				{ name: 'tabletLandscape', min: 769, max: 1024 },
				{ name: 'desktop', min: 1025, max: 1366 },
				{ name: 'desktopWide', min: 1367, max: 1680 },
				{ name: 'desktopHD', min: 1681, max: 1920 },
				{ name: 'desktopMega', min: 1921, max: 9999 }
			],
		}
	}
	currentBreakpoint() {
		for(let i = 0, l = this.state.breakpoints.length; i < l; i++) {
			if (this.isBreakpoint(this.state.breakpoints[i])) {
				this.setState({currentBreakpoint: this.state.breakpoints[i]});
				break;
			}
		}
	}
	isBreakpoint(breakpoint) {
			// console.log(breakpoint);
			const result = (window.innerWidth >= breakpoint.min && window.innerWidth <= breakpoint.max);
			//console.log(`size ${window.innerWidth} == ( min: ${breakpoint.min}, max: ${breakpoint.max}) is ${result}`);
			return result;
	}
	componentDidMount() {
		this.currentBreakpoint();
		window.addEventListener('resize', () => this.currentBreakpoint());
	}
  render() {
    const menuItems = (
      ['Home', 'Portfolio', 'Blog', 'Contact'].map(item =>
        <li key={item}><a href="#">{item}</a></li>
      )
    );
    console.log(menuItems);
    const breakpoint = this.state.currentBreakpoint ? this.state.currentBreakpoint.name : null;
    const Search = (
      <div className={this.state.search ? styles.search : null}>
        <input type="text" placeholder="search" />
        <a onClick={() => this.setState({search: false, menu: false})}/>
      </div>);
    return (
      <section className={styles.menu}>
        {breakpoint === 'phonePortrait' || breakpoint === 'phoneLandscape' ?
          <nav onClick={e => {
            e.stopPropagation();
            this.setState({menu: !this.state.menu, search: false});
          }}>
          </nav>
          :
          <ul>
            {menuItems}
          </ul>
        }
        {breakpoint === 'phonePortrait' || breakpoint === 'phoneLandscape' || breakpoint === 'tabletPortrait' ?
          <a onClick={() => this.setState({search: !this.state.search, menu: false})} />
          :
          false
        }
        {breakpoint === 'phonePortrait' || breakpoint === 'phoneLandscape' || breakpoint === 'tabletPortrait' ?
          <ul style={this.state.menu ? { display: 'flex' } : { display: 'none' }}>
            {menuItems}
          </ul>
          :
          false
        }
        {Search}
      </section>
    );
  }
}

MenuComponent.displayName = 'MenuComponent';

// Uncomment properties you need
// MenuComponent.propTypes = {
//   breakpoint: React.PropTypes.object.isRequired
// };
// MenuComponent.defaultProps = {};

export default MenuComponent;
