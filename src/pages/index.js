import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

import me from './me.jpg';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <h1>Hello.</h1>

      <h2>I'm Steve, a full-stack developer.</h2>

      <img src={me} alt="It's me, Steve!" width="285" height="427" />

      <p>
        Need a developer? <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
