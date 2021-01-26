import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { rhythm } from '../../utils/typography';
import Header from './Header';
import Footer from './Footer';

const Content = styled.main`
  margin: 0 auto;
  max-width: ${rhythm(30)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  text-align: justify;
  text-justify: inter-character;
`;

const Layout = ({ location, title, children }) => (
  <>
    <Header location={location} title={title} />
    <Content>{children}</Content>
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
