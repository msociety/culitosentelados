// Gatsby supports TypeScript natively!
import React from 'react';
import PropTypes from 'prop-types';
import { PageProps, Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/pro-light-svg-icons';
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
            featuredImage {
              childImageSharp {
                fixed(height: 200, width: 200) {
                  ...GatsbyImageSharpFixed
                }
                # fluid(maxWidth: 200, maxHeight: 200) {
                #   ...GatsbyImageSharpFluid
                # }
              }
            }
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
      {posts.map(({ node }) => {
        const { title, date, description, featuredImage } = node.frontmatter;
        const { slug } = node.fields;
        const featuredImg = featuredImage ? featuredImage.childImageSharp.fixed : null;
        return (
          <article key={slug} style={{ overflow: 'auto', margin: '2em 0' }}>
            {featuredImg && <Img fixed={featuredImg} style={{ float: 'left', width: 200 }} />}
            <div style={{ marginLeft: featuredImg ? 200 : 0, padding: '1em' }}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 5),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={slug}>
                    {title || slug}
                  </Link>
                </h3>
                <p style={{ marginBottom: rhythm(1 / 3) }}>
                  <small>
                    <FontAwesomeIcon icon={faCalendar} /> {date}
                  </small>
                </p>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description || node.excerpt,
                  }}
                />
              </section>
            </div>
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
            featuredImage: PropTypes.object,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};
export default BlogIndex;
