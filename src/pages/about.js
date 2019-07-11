import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me...</h1>
      <p>
        I am a frontend/backend developer living and working in Berlin, Germany.
      </p>
      <br />
      <p>
        My early career was predominantly backend; C, Java, Python, Sybase,
        PostgreSQL, postgis, running on various *nix systems, but in recent
        years I have been pivoting to frontend languages and tooling, (React,
        React-Native, TypeScript, Jest, ...) just because the pace of change and
        invention there seems more exciting to me.
      </p>
      <br />
      <p>
        That said, I haven't totally let go of the backend world because I am
        currently enjoying learning (trying to!) Kotlin, Go(lang), mongodb,
        Node.js, and all that DevOps goodness, with Docker and friends.
      </p>
      <br />
      <p>
        My wish (hope!?) is to work in a small-to-medium sized team/company
        where I can continue to learn and contribute to projects/applications
        using any (or all!) of the above.
      </p>
      <br />
    </Layout>
  );
};

export default AboutPage;
