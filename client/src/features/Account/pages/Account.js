import { Avatar, Box, Typography } from '@mui/material';
import Page from 'components/common/Page';
import { logout } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconArrowRight from '../../../assets/icons/arrowRight.svg';
import IconCard from '../../../assets/icons/card.svg';
import IconLogout from '../../../assets/icons/logout.svg';
import IconOrder from '../../../assets/icons/order.svg';
import IconUser from '../../../assets/icons/user.svg';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import Linkaccount from '../components/LinkAccount';
import useStyle from './useStyle';
import Header from 'components/common/Header';

function Account() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Page
      title="Thông tin tài khoản"
      header={<Header headerMobile="onlyTitle" titleMobile="Thông tin tài khoản" />}
    >
      <Box className={classes.boxAvatar}>
        <Avatar src={avatar1} className={classes.avatar}></Avatar>
        <Typography variant="h6">{user.fullName}</Typography>
      </Box>
      <Box className={classes.p10} maxWidth="sm" mx="auto">
        <Linkaccount
          title="Đơn hàng"
          href="/account/order"
          iconStart={IconOrder}
          iconEnd={IconArrowRight}
        />
        <Linkaccount
          title="Địa chỉ giao hàng"
          href="/account/address"
          iconStart={IconUser}
          iconEnd={IconArrowRight}
        />
        <Linkaccount
          title="Thiết lập tài khoản"
          href="/account/inforuser"
          iconStart={IconUser}
          iconEnd={IconArrowRight}
        />
        <Linkaccount
          title="Đăng ký giao hàng"
          href="/shipper-register"
          iconStart={IconUser}
          iconEnd={IconArrowRight}
        />
        <Linkaccount
          title="Đăng ký bán hàng"
          href="/seller-register"
          iconStart={IconUser}
          iconEnd={IconArrowRight}
        />
        <Linkaccount
          title="Đăng xuất"
          href="/login"
          iconStart={IconLogout}
          iconEnd={IconArrowRight}
          handleClick={handleLogout}
        />
      </Box>
    </Page>
  );
}

Account.propTypes = {};

export default Account;
