import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';

import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from '../../../features/Search/components/SearchBar';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from 'features/Cart/seletors';
import { Button, Divider, Stack } from '@mui/material';

function HeaderDesktop(props) {
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const user = useSelector((state) => state.user.userData);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ color: 'common.white', display: { xs: 'none', md: 'block' } }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link to="/">
            <Logo />
          </Link>

          <Search
            sx={{
              display: { xs: 'none', md: 'flex' },
              ml: 8,
              sm: {
                ml: 3,
                width: 'auto',
              },
            }}
          />

          <Box sx={{ flexGrow: 1 }}></Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              component={Link}
              to="/account"
              variant="text"
              color="inherit"
              startIcon={<AccountCircle />}
            >
              {user?.displayName ? user.displayName : 'Đăng nhập'}
            </Button>
            <Divider orientation="vertical" variant="middle" sx={{ height: '20px' }} />
            <Button
              component={Link}
              to="/cart"
              variant="text"
              color="inherit"
              endIcon={
                <Badge badgeContent={cartItemsCount} color="secondary">
                  <ShoppingCartIcon fontSize="small" />
                </Badge>
              }
            >
              Giỏ hàng
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderDesktop;
