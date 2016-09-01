'use strict';

import React from 'react';
import styles from './main.scss';

const a1 = require('../../images/articles/a1.jpg');
const a2 = require('../../images/articles/a2.jpg');
const a3 = require('../../images/articles/a3.jpg');
const a4 = require('../../images/articles/a4.jpg');

class ArticlesComponent extends React.Component {
  render() {
    return (
      <section className={styles.articles}>
        <article>
          <img src={a1}/>
          <p>
            Lorem ipsum dolor sit amet, 
            uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. 
            ipsum dolor sit amet, consectetuer Duis autem vel Lorem ipsum 
            Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure 
            Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer
          </p>
          <a href="#">more...</a>
        </article>
        <article>
          <img src={a2}/>
          <p>
            Lorem ipsum dolor sit amet, 
            uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. 
            ipsum dolor sit amet, consectetuer Duis autem vel Lorem ipsum 
            Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure 
            Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer
          </p>
          <a href="#">more...</a>
        </article>
        <article>
          <img src={a3}/>
          <p>
            Lorem ipsum dolor sit amet, 
            uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. 
            ipsum dolor sit amet, consectetuer Duis autem vel Lorem ipsum 
            Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure 
            Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer
          </p>
          <a href="#">more...</a>
        </article>
        <article>
          <img src={a4}/>
          <p>
            Lorem ipsum dolor sit amet, 
            uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. 
            ipsum dolor sit amet, consectetuer Duis autem vel Lorem ipsum 
            Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure 
            Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer
          </p>
          <a href="#">more...</a>
        </article>
      </section>
    );
  }
}

ArticlesComponent.displayName = 'ArticlesComponent';

// Uncomment properties you need
// ArticlesComponent.propTypes = {};
// ArticlesComponent.defaultProps = {};

export default ArticlesComponent;
