import { Box, Typography } from '@mui/material';
import React from 'react';
import CardProduct from './CardProduct';
import useStyle from './useStyle';
import { formatPrice } from 'utils';

function OrderDelivery(props) {
  const { id, status, deliveryFee, totalPrice, details, ...rest } = props;
  const classes = useStyle();
  return (
    <Box className={classes.orderDelivery} pb={2}>
      <div>
        <Typography color={'black'} fontWeight={'500'}>
          Thông tin đơn hàng
        </Typography>
        <Typography color={'#FF5F2D'} fontWeight={'500'}>
          {status}
        </Typography>
      </div>
      {details &&
        details.map((item, index) => (
          <CardProduct
            key={index}
            img={item.product.image[0]}
            name={item.product.name}
            attribute={item.selected.value}
            quantity={item.quantity}
            price={item.product.salePrice}
            href={`account/order/${id}`}
          />
        ))}
      <div>
        <Typography>Tổng tiền hàng:</Typography>
        <Typography>{formatPrice(totalPrice)}</Typography>
      </div>
      <div>
        <Typography>Tổng phí vận chuyển:</Typography>
        <Typography>{formatPrice(deliveryFee)}</Typography>
      </div>
      <div>
        <Typography fontWeight={'500'} color="black">
          Thành tiền:
        </Typography>
        <Typography fontWeight={'500'} color="black">
          {formatPrice(totalPrice + deliveryFee)}
        </Typography>
      </div>
    </Box>
  );
}

export default OrderDelivery;
