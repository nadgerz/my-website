import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
  query bySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        internal {
          content
        }
      }
    }
  }
`;
const Blog = props => {
  const { title, publishDate, body } = props.data.contentfulBlogPost;

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const fields = node.data.target.fields;

        const locale = 'en-US';

        const alt = fields.title[locale];
        const url = fields.file[locale].url;

        return <img alt={alt} url={url} />;
      },
    },
  };

  return (
    <Layout>
      <Head title={title} />

      <h1>{title}</h1>
      <p>{publishDate}</p>
      {documentToReactComponents(body.internal.content, options)}
    </Layout>
  );
};

export default Blog;
