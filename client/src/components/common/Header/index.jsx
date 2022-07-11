import React from 'react';
import PropTypes from 'prop-types';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

Header.propTypes = {
  headerDesktop: PropTypes.string,
  headerMobile: PropTypes.string,
  titleMobile: PropTypes.string,
};

function Header({ headerDesktop, headerMobile, titleMobile }) {
  return (
    <>
      <HeaderDesktop headerDesktop={headerDesktop} />
      <HeaderMobile headerMobile={headerMobile} titleMobile={titleMobile} />
    </>
  );
}

export default Header;
