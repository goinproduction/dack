import { Grid, Stack, Typography } from '@mui/material';
import Header from 'components/common/Header';
import Page from 'components/common/Page';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  cartItemsCountSelector,
  cartItemsSelector,
  cartTotalSelector,
  cartDiscountSelector,
} from './seletors';
import CartTable from './component/CartTable';
import CartTotal from './component/CartTotal';
import EmptyCart from './component/EmptyCart';

function CartFeature() {
  const cartItems = useSelector(cartItemsSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const cartDiscount = useSelector(cartDiscountSelector);

  if (cartItems.length <= 0) {
    return (
      <Page
        title="Chưa có sản phẩm nào trong giỏ hàng"
        header={<Header headerMobile="onlyTitle" titleMobile="Giỏ hàng trống" />}
      >
        <EmptyCart />
      </Page>
    );
  }

  return (
    <Page title="Giỏ hàng" header={<Header headerMobile="onlyTitle" titleMobile="Giỏ hàng" />}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ mb: 3, display: { xs: 'none', md: 'flex' } }}
      >
        <Typography component="h1" variant="h6">
          Giỏ hàng
        </Typography>
        <Typography>({cartItemsCount} sản phẩm)</Typography>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <CartTable cartItems={cartItems} />
        </Grid>
        <Grid item xs={12} md={4}>
          <CartTotal cartTotal={cartTotal} discount={cartDiscount} />
        </Grid>
      </Grid>
    </Page>
  );
}

export default CartFeature;
