import { Box, Typography } from '@mui/material';
import React from 'react';
import CardProduct from './CardProduct';
import useStyle from './useStyle';
import { formatPrice } from 'utils';

function Order(props) {
  const classes = useStyle();
  const { id, status, details, ...rest } = props;
  return (
    <Box className={classes.order}>
      <div>
        <Typography fontWeight={'500'}>{id}</Typography>
        <Typography color={'#FF5F2D'} fontWeight={'500'}>
          {status}
        </Typography>
      </div>
      {details.map((item, index) => (
        <CardProduct
          key={index}
          img={item.product.image[0]}
          name={item.product.name}
          attribute={item.selected.value}
          quantity={item.quantity}
          price={item.product.salePrice}
          href={`/account/order/${id}`}
        />
      ))}
      <div color="grey">
        <Typography>{details.reduce((sum, value) => sum + value.quantity, 0)} sản phẩm</Typography>
        <Typography>
          Thành tiền: {formatPrice(`${details.reduce((sum, value) => sum + value.total, 0)}`)}
        </Typography>
      </div>
    </Box>
  );
}

export default Order;
