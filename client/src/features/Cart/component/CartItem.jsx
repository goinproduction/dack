import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from 'utils';
import CartRow from './CartRow';
import ProductCart from './ProductCart';
import QuantityItem from './QuantityItem';
import RemoveItem from './RemoveItem';

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

const hideOnMobile = { display: { xs: 'none', md: 'block' } };
const hideOnDesktop = { display: { xs: 'block', md: 'none' } };

function CartItem({ cartItem }) {
  return (
    <CartRow>
      <ProductCart cartItem={cartItem} />

      <Stack direction="row" sx={{ justifyContent: { xs: 'space-between', md: 'center' } }}>
        <QuantityItem cartItem={cartItem} />
        <RemoveItem type="text" id={cartItem.id} sx={{ ...hideOnDesktop }} />
      </Stack>

      <Box sx={{ ...hideOnMobile }}>
        <Typography component="bdi" color="secondary.main" sx={{ fontSize: 16, fontWeight: 500 }}>
          {formatPrice(cartItem.product.salePrice * cartItem.quantity)}
        </Typography>
      </Box>
    </CartRow>
  );
}

export default CartItem;
