'use strict';

import React from 'react';
import styles from './main.scss';

const image = require('../../images/slider/image.png');

class SliderComponent extends React.Component {
  render() {
    return (
      <section className={styles.slider}>
        <img src={image} />
      </section>
    );
  }
}

SliderComponent.displayName = 'SliderComponent';

// Uncomment properties you need
// SliderComponent.propTypes = {};
// SliderComponent.defaultProps = {};

export default SliderComponent;
