import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const WhatIAmLearningPage = () => {
  return (
    <Layout>
      <Head title="What I Am Learning" />

      <div id={'what-im-learning'} className={'what-im-learning'}>
        <h2>What I Am Learning right now...</h2>

        <ul className={'learning-now'}>
          <li className={'flex-item'}>
            <h3>
              Languages/
              <br />
              Frameworks/
              <br />
              Libraries
            </h3>
            <ul>
              <li>React</li>
              <li>React-Native</li>
              <li>Go</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Kotlin</li>
            </ul>
          </li>

          <li className={'flex-item'}>
            <h3>Tools</h3>
            <ul>
              <li>Docker</li>
              <li>Jest</li>
            </ul>
          </li>
        </ul>

        <hr />

        <h2>What's up next...</h2>

        <ul className={'up-next flex-item'}>
          <li className={'flex-item'}>
            <h3>
              Languages/
              <br />
              Frameworks/
              <br />
              Libraries
            </h3>
            <ul>
              <li>Flutter/Dart</li>
              <li>Swift</li>
            </ul>
          </li>

          <li className={'flex-item'}>
            <h3>Tools</h3>
            <ul>
              <li>CI/CD</li>
            </ul>
          </li>
        </ul>
        <hr />

        <h2>Resources</h2>
        <p>This is a list of resources I use/have used</p>

        <ul className={'resources'}>
          <li>WesBos</li>
          <li>JetBrains</li>
          <li>egghead.io</li>
          <li>frontendmasters.com</li>
          <li>packtpub.com</li>
          <li>Manning books</li>
          <li>Pragmatic Programmer books</li>
        </ul>

        <hr />
      </div>
    </Layout>
  );
};

export default WhatIAmLearningPage;
