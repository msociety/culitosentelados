// Gatsby supports TypeScript natively!
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { PageProps, Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendar } from '@fortawesome/pro-light-svg-icons';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { rhythm } from '../utils/typography';
import { MEDIA_QUERY__DEFAULT, MEDIA_QUERY__MIN_DEFAULT } from '../utils/breakpoint-constants';

const Content = styled.div`
  padding: 1em;
`;

const Article = styled.article`
  margin: 2em 0;
  ${MEDIA_QUERY__MIN_DEFAULT} {
    display: flex;
    align-items: center;
    > .gatsby-image-wrapper {
      flex-basis: 200px;
    }
    > ${Content} {
      flex: 1;
    }
  }
`;

const FixedImg = styled(Img)`
  ${MEDIA_QUERY__DEFAULT} {
    display: none !important;
  }
`;

const FluidImg = styled(Img)`
  ${MEDIA_QUERY__MIN_DEFAULT} {
    display: none;
  }
`;

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
                fluid(maxWidth: 600, maxHeight: 150) {
                  ...GatsbyImageSharpFluid
                }
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
        const featuredImg = featuredImage
          ? {
              fixed: featuredImage.childImageSharp.fixed,
              fluid: featuredImage.childImageSharp.fluid,
            }
          : null;
        console.log('featuredImg', featuredImg);
        return (
          <Article key={slug}>
            {featuredImg && (
              <>
                <FixedImg fixed={featuredImg.fixed} />
                <FluidImg fluid={featuredImg.fluid} />
              </>
            )}
            <Content>
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
                    {/* <FontAwesomeIcon icon={faCalendar} /> */}
                    {date}
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
            </Content>
          </Article>
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
