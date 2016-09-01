'use strict';

import React from 'react';
import styles from './main.scss';

const a1 = require('../../images/articles/a1.jpg');
const a2 = require('../../images/articles/a2.jpg');
const a3 = require('../../images/articles/a3.jpg');
const a4 = require('../../images/articles/a4.jpg');

class InfoComponent extends React.Component {
  render() {
    return (
      <section className={styles.info}>
        <figure>
          <img src={a3} />
          <img src={a2} />
          <img src={a4} />
          <img src={a1} />
        </figure>
        <div>
          <h2>Welcome to the site</h2>
          <p>
          	Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer Duis autem vel Lorem ipsum Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer  Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer Duis autem vel Lorem ipsum Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer 	Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, sectetuer.
          </p>
          <div>
            <a href="#">more...</a>
          </div>
        </div>
      </section>
    );
  }
}

InfoComponent.displayName = 'InfoComponent';

// Uncomment properties you need
// InfoComponent.propTypes = {};
// InfoComponent.defaultProps = {};

export default InfoComponent;
