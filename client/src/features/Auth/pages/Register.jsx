import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/common/Page';
import RegisterForm from '../components/RegisterForm';
import { Box } from '@mui/material';
import Header from 'components/common/Header';

Register.propTypes = {};

function Register(props) {
  return (
    <Page
      title="Tạo tài khoản"
      header={<Header headerMobile="onlyTitle" titleMobile="Tạo tài khoản" />}
    >
      <Box maxWidth="sm" mx="auto">
        <RegisterForm />
      </Box>
    </Page>
  );
}

export default Register;
