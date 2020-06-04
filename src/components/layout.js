import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Header location={location} title={title} />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
