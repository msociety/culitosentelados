// Gatsby supports TypeScript natively!
import React from 'react';
import PropTypes from 'prop-types';
import { PageProps, Link, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/pro-light-svg-icons';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { rhythm } from '../utils/typography';

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 9
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "LL", locale: "es")
            title
            description
          }
        }
      }
    }
  }
`;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 5),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <p style={{ marginBottom: rhythm(1 / 3) }}>
                <small>
                  <FontAwesomeIcon icon={faCalendar} /> {node.frontmatter.date}
                </small>
              </p>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf({
        node: PropTypes.shape({
          excerpt: PropTypes.string.isRequired,
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }).isRequired,
          frontmatter: PropTypes.shape({
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};
export default BlogIndex;
