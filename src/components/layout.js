import React from 'react';

import Header from './header';
import Footer from './footer';

// import layoutStyles from './layout.module.scss';
import '../assets/css/layout.scss';
import '../assets/css/base/resets.scss';
import '../assets/css/base/typography.scss';
import '../assets/css/base/styles.scss';


const Layout = props => {
  return (
    <div className={'site-container'}>
      <Header/>
      <main className={'main'}>
        {props.children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
