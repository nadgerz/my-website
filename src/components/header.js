import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import logo from '../assets/images/branding/logo.png';
import headerStyles from './header.module.scss';
import '../assets/css/base/typography.scss';


const Header = () => {
  const data = useStaticQuery( graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  ` );
  
  return (
    <header className={headerStyles.header}>
      <div className={'branding'}>
        <img
          className={'img-logo'}
          src={logo}
          alt="Steve Ingram fat fish logo"
          aria-hidden
        />
        <h1>
          <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </div>
      
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/code"
            >
              Code
            </Link>
          </li>
          
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/what-i-use"
            >
              What I Use
            </Link>
          </li>
          
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/what-i-am-learning"
            >
              Learning
            </Link>
          </li>
          
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
