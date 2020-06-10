import React from 'react';
import PropTypes from 'prop-types';
import { rhythm } from '../../utils/typography';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ location, title, children }) => (
  <>
    <Header location={location} title={title} />
    <main
      style={{
        margin: '0 auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {children}
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
