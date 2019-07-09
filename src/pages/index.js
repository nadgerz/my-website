import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

import me from '../assets/images/me.jpg';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <h1>Hello.</h1>

      <h2>
        I'm Steve, a full-stack developer with over 20 years experience in
        backend and frontend development in GIS/mapping products for major US
        Utility companies.
        <br />I work with JavaScript, React, React-Native, Java, PostgreSQL and
        many of their friends.
      </h2>

      <img src={me} alt="It's me, Steve!" width="285" height="427" />

      <p>
        Need a developer? <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
