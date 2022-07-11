import { Avatar, Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import locationAPI from 'api/location/locationApi';
import { FETCH_DELIVERY_ADDRESS_REQUEST } from 'app/saga/auth/actionType';
import { FETCH_PROVINCE } from 'app/saga/location/actionType';
import Page from 'components/common/Page';
import OrderDelivery from 'features/Account/components/OderDelivery';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useStyle from './useStyle';
import authAPI from 'api/userApi';
import LoadingScreen from 'components/common/LoadingScreen';
import Linkaccount from '../../Account/components/LinkAccount';
import Header from 'components/common/Header';
import avatar1 from '../../../assets/images/success.png';
import { formatDate } from 'utils';

function OrderSuccess() {
  const classes = useStyle();
  const { province } = useSelector((state) => state.location);
  const { userData } = useSelector((state) => state.user);
  const { addressDelivery } = useSelector((state) => state.user);
  const [district, setDistrict] = useState([]);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(async () => {
    setLoading(true);
    const res = await authAPI.getOrderDetail(slug);
    setDetail(res.order[0]);
    setLoading(false);
  }, [slug]);

  var date = new Date(`${detail?.order_time}`);
  console.log(detail?.order_time);

  const locationCity = province.find((value) => value.id == addressDelivery.city)?.name;
  const locationDistrict = useMemo(
    () => district.find((value) => value.id == addressDelivery.district)?.name,
    [district]
  );

  useEffect(() => {
    dispatch({ type: FETCH_DELIVERY_ADDRESS_REQUEST, userId: userData.userId });
    dispatch({ type: FETCH_PROVINCE });
  }, []);

  useEffect(() => {
    locationAPI.district(addressDelivery.city).then((res) => {
      setDistrict(res.data);
    });
  }, [addressDelivery]);

  if (loading) {
    return (
      <Page
        title="Chi tiết đơn hàng"
        header={<Header headerMobile="onlyTitle" titleMobile="Chi tiết đơn hàng" />}
      >
        <LoadingScreen />
      </Page>
    );
  }

  return (
    <Page
      title="Đặt hàng thành công"
      header={<Header headerMobile="onlyTitle" titleMobile="Đặt hàng thành công" />}
    >
      <Box className={classes.boxAvatar}>
        <Avatar src={avatar1} className={classes.avatar}></Avatar>
        <Typography variant="h6" color={'#FF5F2D'}>
          Đặt hàng thành công
        </Typography>
      </Box>
      <Box className={classes.mt18}>
        <OrderDelivery
          id={slug}
          status={''}
          deliveryFee={detail.delivery_fee}
          totalPrice={detail.total_price}
          details={detail.details}
        />
      </Box>
      {addressDelivery?.fullName ? (
        <Box className={classes.inforOrder}>
          <Typography>Địa chỉ nhận hàng:</Typography>
          <Divider />
          <div>
            <Typography>{addressDelivery.fullName}</Typography>
            <Typography>{addressDelivery.phone}</Typography>
            <Typography>
              {addressDelivery.apartmentNumber}, {addressDelivery.ward}, {locationDistrict},{' '}
              {locationCity}
            </Typography>
          </div>
        </Box>
      ) : (
        <Box className={classes.inforOrder}>
          <Linkaccount
            title="Địa chỉ giao hàng"
            iconStart={''}
            endButton={'Thêm'}
            href="/address"
          />
        </Box>
      )}

      <Box className={classes.inforOrder}>
        <Typography>Thông tin khác:</Typography>
        <Divider />
        <div>
          <div>
            <Typography color={'#808080'}>Mã đơn hàng</Typography>
            <Typography>{slug}</Typography>
          </div>
          <div>
            <Typography color={'#808080'}>Thời gian đặt hàng:</Typography>
            <Typography>{formatDate(date)}</Typography>
          </div>
          <div>
            <Typography color={'#808080'}>Phương thức thanh toán:</Typography>
            <Typography color={'#FF5F2D'}>Thanh toán khi nhận hàng</Typography>
          </div>
        </div>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" fullWidth onClick={() => navigate('/account/order')}>
          Xem đơn hàng
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          // sx={{ bgcolor: '#FF5F2D', minWidth: '150px', color: 'white' }}
          onClick={() => navigate('/')}
          fullWidth
        >
          Quay về shop
        </Button>
      </Stack>
    </Page>
  );
}

export default OrderSuccess;
