import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />

      <h1>How to contact me/Where to find me</h1>

      <p>
        <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
          stephen.a.ingram@gmail.com
        </a>
      </p>

      <p>
        <a
          href="https://www.linkedin.com/in/stephen-ingram-3078aa19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>

      <p>
        <a
          href="https://github.com/nadgerz"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
