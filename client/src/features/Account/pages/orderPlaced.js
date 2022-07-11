import { Box, Typography } from '@mui/material';
import Page from 'components/common/Page';
import Order from 'features/Account/components/order';
import React, { useState, useEffect } from 'react';
import useStyle from './useStyle';
import LoadingScreen from '../../../components/common/LoadingScreen';
import { useSelector } from 'react-redux';

function OderPlaced(props) {
  const classes = useStyle();
  const { data } = props;
  const { isLoadingScreen } = useSelector((state) => state.user);

  if (isLoadingScreen) {
    return <LoadingScreen />;
  }
  return (
    <Box className={classes.mt18}>
      {data.length > 0 ? (
        data?.map((item, index) => (
          <Order key={index} id={item?._id} status={item?.order_status} details={item.details} />
        ))
      ) : (
        <Typography
          sx={{
            bgcolor: 'white',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Hiện không có đơn hàng nào!!!
        </Typography>
      )}
    </Box>
  );
}

export default OderPlaced;
