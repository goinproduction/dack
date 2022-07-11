import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { cartItemsCountSelector } from 'features/Cart/seletors';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo';

HeaderMobile.propTypes = {
  headerMobile: PropTypes.oneOf(['home', 'onlyTitle', 'productDetail']),
  titleMobile: PropTypes.string,
};

HeaderMobile.defaultProps = {
  headerMobile: 'home',
};

function HeaderMobile({ headerMobile, titleMobile }) {
  const navigate = useNavigate();
  const cartItemsCount = useSelector(cartItemsCountSelector);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ color: 'common.white', display: { xs: 'block', md: 'none' } }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {headerMobile === 'home' && (
            <>
              <Link to="/">
                <Logo />
              </Link>

              <Box sx={{ flexGrow: 1 }}></Box>

              <Box>
                <IconButton component={Link} to="/account" color="inherit">
                  <AccountCircle />
                </IconButton>
                <IconButton component={Link} to="/cart" color="inherit">
                  <Badge badgeContent={cartItemsCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Box>
            </>
          )}

          {headerMobile === 'onlyTitle' && (
            <>
              <IconButton onClick={handleGoBack} color="inherit" sx={{ ml: '-8px' }}>
                <ArrowBackIosNewIcon />
              </IconButton>

              <Box sx={{ flexGrow: 1 }}></Box>

              <Typography component="p" fontSize="18px" fontWeight="500" sx={{ ml: '-22px' }}>
                {titleMobile}
              </Typography>

              <Box sx={{ flexGrow: 1 }}></Box>
            </>
          )}

          {headerMobile === 'productDetail' && (
            <>
              <IconButton onClick={handleGoBack} color="inherit" sx={{ ml: '-8px' }}>
                <ArrowBackIosNewIcon />
              </IconButton>

              <Box sx={{ flexGrow: 1 }}></Box>

              <Box>
                <IconButton component={Link} to="/cart" color="inherit">
                  <Badge badgeContent={cartItemsCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderMobile;
