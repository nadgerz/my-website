import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const WhatIUsePage = () => {
  return (
    <Layout>
      <Head title="What I Use" />

      <h2>What I Use...</h2>

      <div className={'what-i-use'}>
        <section className={'flex-item'}>
          <h3>
            Languages/
            <br />
            Frameworks/
            <br />
            Libraries
          </h3>

          <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>React</li>
            <li>React-Native</li>
            <li>Go(lang)</li>
            <li>Node.js</li>
          </ul>
        </section>

        <section className={'flex-item'}>
          <h3>Tools</h3>

          <ul>
            <li>Docker</li>
            <li>Jest</li>
            <li>Prettier</li>
            <li>ESLint</li>
          </ul>
        </section>

        <section className={'flex-item'}>
          <h3>Databases</h3>

          <ul>
            <li>PostgreSQL</li>
            <li>mongodb</li>
          </ul>
        </section>

        <section className={'flex-item'}>
          <h3>Editors/IDEs</h3>

          <ul>
            <li>vim</li>
            <li>WebStorm</li>
            <li>IntelliJ</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default WhatIUsePage;
