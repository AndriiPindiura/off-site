'use strict';

import React from 'react';
import styles from './main.scss';

class FooterComponent extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">&copy; 2009 Degignzzz (www.designzzz.com)</a>
      </footer>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
