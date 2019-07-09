import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const CodePage = () => {
  return (
    <Layout>
      <Head title="Code" />

      <h1>Code</h1>

      <ul>
        <li>
          <h2>This Site!</h2>
          <p>
            This website was built using Gatsby, React, SCSS and a smattering of
            Markdown and Contentful CMS goodness. It is based on the tutorial by
            Andrew Mead, which you can find @
            <a
              href="https://www.youtube.com/watch?v=8t0vNu2fCCM"
              target="__blank"
              rel="noopener noreferrer"
            >
              'The Great Gatsby Bootcamp'
            </a>
          </p>
          <a
            href="https://github.com/nadgerz/the-website-of-the-one-and-only-stephen-a-ingram-esq"
            target="__blank"
            rel="noopener noreferrer"
          >
            [git]
          </a>
        </li>

        <li>
          <h2>Splittr-lite. (very lite)</h2>
          <p>
            Just a fun little project to build a few different versions of a
            Splittr-like app. One as a command-line, one in React for the web,
            one in React-Native etc.
          </p>
          <ul>
            <li>
              <h2>node.js</h2>
              <a
                href="https://github.com/nadgerz/Wie-viel-schulde-ich-dir-nodejs"
                target="__blank"
                rel="noopener noreferrer"
              >
                [git]
              </a>
            </li>
          </ul>
        </li>

        <li>
          <h2>Mini Mapper</h2>
          <p>Placeholder for my next personal project.</p>
          <p>
            It will be a small mapping project to try and bring together some of
            the languages, frameworks and tools I have been trying to learn;
            like React/React-Native, Go(lang), mongodb, Docker, TypeScript.
          </p>
          <Link to={'/mini-mapper'}>[git]</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default CodePage;
