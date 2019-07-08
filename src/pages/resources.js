import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ResourcesPage = () => {
  return (
    <Layout>
      <Head title="Resources" />

      <h1>Resources</h1>

      <p>This is a list of resources I use/have used</p>

      <ul>
        <li>WesBos</li>
        <li>JetBrains</li>
        <li>egghead.io</li>
        <li>frontendmasters.com</li>
        <li>packtpub.com</li>
        <li>Manning books</li>
        <li>Pragmatic Programmer books</li>
      </ul>
    </Layout>
  );
};

export default ResourcesPage;
