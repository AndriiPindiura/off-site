'use strict';

import React from 'react';
import style from './main.scss';

class LogoComponent extends React.Component {
  render() {
    return (
      <section className={style.logo}>
        <h1>Logo</h1>
      </section>
    );
  }
}

LogoComponent.displayName = 'LogoComponent';

// Uncomment properties you need
// LogoComponent.propTypes = {};
// LogoComponent.defaultProps = {};

export default LogoComponent;
