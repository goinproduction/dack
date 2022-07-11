import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Header from 'components/common/Header';
import Logo from 'components/common/Logo';
import Page from 'components/common/Page';
import React from 'react';
import LoginForm from '../components/LoginForm';
import useStyle from './useStyle';

function Login(props) {
  const classes = useStyle();
  return (
    <Page title="Đăng nhập" header={<Header headerMobile="onlyTitle" titleMobile="Đăng nhập" />}>
      <Box maxWidth="sm" mx="auto">
        <Box className={classes.styleBox} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Logo />
        </Box>
        <LoginForm {...props} />
      </Box>
    </Page>
  );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
