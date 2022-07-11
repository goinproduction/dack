import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsSelector } from '../seletors.js';
import CartItem from './CartItem.jsx';
import CartRow from './CartRow.jsx';
import Divider from '@mui/material/Divider';

CartTable.propTypes = {};

const tableHeader = ['Sản phẩm', 'Số lượng', 'Thành tiền'];

function CartTable() {
  const cartItems = useSelector(cartItemsSelector);

  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <CartRow sx={{ pt: 0, pb: 1 }}>
          {tableHeader.map((label, index) => (
            <Typography key="index" textAlign="center" variant="subtitle2">
              {label}
            </Typography>
          ))}
        </CartRow>

        <Divider />
      </Box>

      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
    </Paper>
  );
}

export default CartTable;
