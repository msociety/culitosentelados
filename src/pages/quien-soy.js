// Gatsby supports TypeScript natively!
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const QuienSoy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Quien soy" />
      <Bio />
    </Layout>
  );
};

QuienSoy.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default QuienSoy;
