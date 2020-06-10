import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/pro-duotone-svg-icons';
import { rhythm, scale } from '../../../utils/typography';

export const BabyIcon = styled(FontAwesomeIcon)`
  color: violet;
`;

export const Container = styled.header`
  max-width: 600px;
  margin: 0 auto;
`;

export const Links = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: right;
  /* margin: 10px 0; */
  padding: 10px;
`;

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let titleElem;

  if (location.pathname === rootPath) {
    titleElem = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: rhythm(1.2),
          textAlign: 'center',
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          <BabyIcon icon={faBaby} /> {title}
        </Link>
      </h1>
    );
  } else {
    titleElem = (
      <h3
        style={{
          ...scale(1.2),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          <BabyIcon icon={faBaby} /> {title}
        </Link>
      </h3>
    );
  }
  return (
    <Container>
      <Links>
        <Link
          style={{
            boxShadow: 'none',
            color: 'inherit',
          }}
          to="/quien-soy"
        >
          Quien soy
        </Link>
      </Links>
      {titleElem}
    </Container>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
