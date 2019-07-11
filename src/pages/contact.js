import React from 'react';

import { GitHub, LinkedIn, Mail } from '../assets/images/socialIcons';

import Layout from '../components/layout';
import Head from '../components/head';

import '../assets/css/pages/contact.scss';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />

      <div id={'contact'} className={'contact .container'}>
        <h2>
          How to contact me/
          <br />
          Where to find me
        </h2>

        <ul className={'social-icons'}>
          <li className="mailto">
            <a
              href="mailto:stephen.a.ingram@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </a>
          </li>
        </ul>

        <p>
          <a
            href="mailto:stephen.a.ingram@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      </div>
    </Layout>
  );
};

export default ContactPage;
