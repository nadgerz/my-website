import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import logo from '../assets/images/branding/logo.png';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <header className={'header'}>
      <Link className={'title'} to="/">
        <img
          className={'img-logo'}
          src={logo}
          alt="Steve Ingram fat fish logo"
          aria-hidden
        />
      </Link>
      <div className={'nav-branding'}>
        <h1>{data.site.siteMetadata.title}</h1>

        <nav>
          <ul className={'navList'}>
            <li>
              <Link
                className={'navItem'}
                activeClassName={'activeNavItem'}
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className={'navItem'}
                activeClassName={'activeNavItem'}
                to="/about"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className={'navItem'}
                activeClassName={'activeNavItem'}
                to="/what-i-use"
              >
                What I Use
              </Link>
            </li>

            <li>
              <Link
                className={'navItem'}
                activeClassName={'activeNavItem'}
                to="/what-i-am-learning"
              >
                Learning
              </Link>
            </li>

            <li>
              <Link
                className={'navItem'}
                activeClassName={'activeNavItem'}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
