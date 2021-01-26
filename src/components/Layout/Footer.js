import React from 'react';
// import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
// import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/pro-solid-svg-icons';
import { scale, rhythm } from '../../utils/typography';
import Bio from '../Bio';

const Container = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #f5f5f5;
`;

const blinkingHeart = keyframes`
    from {
        transform: scale(1);
    }
    60% {
        transform: scale(1);
    }
    70% {
        transform: scale(1.3);
    }
    80% {
        transform: scale(1);
    }
    90% {
        transform: scale(1.3);
    }
    to {
        transform: scale(1);
    }
`;

const HeartIcon = styled(FontAwesomeIcon)`
  color: red;
  animation-name: ${blinkingHeart};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
`;

const Sign = styled.p`
  font-size: 0.7em;
  position: absolute;
  right: 10px;
  bottom: 5px;
  margin: 0;

  &:hover {
    ${HeartIcon} {
      animation-duration: 0.8s;
    }
  }
`;

const Footer = () => {
  return (
    <Container style={{ ...scale(-0.4) }}>
      <Bio style={{ marginBottom: rhythm(1 / 2) }} />
      <p>
        © {new Date().getFullYear()}. Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
      <Sign>
        Done with <HeartIcon icon={faHeart} title="love" /> by mi maridito
      </Sign>
    </Container>
  );
};

// Footer.propTypes = {};

export default Footer;
