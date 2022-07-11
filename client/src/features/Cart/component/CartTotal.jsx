import { Button, Paper, Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from 'utils';
import { useNavigate } from 'react-router-dom';

CartTotal.propTypes = {
  cartTotal: PropTypes.number.isRequired,
  discount: PropTypes.number,
};

CartTotal.defaultProps = {
  discount: 0,
};

function CartTotal({ cartTotal, discount, hide }) {
  const navigate = useNavigate();

  return (
    <>
      <Paper elevation={0} sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ pb: 1 }}>
          Cộng giỏ hàng
        </Typography>

        <Divider />

        <Stack driection="column" spacing={1} sx={{ pt: 2, pb: 2 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography color="grey.600">Tạm tính</Typography>
            <Typography>{formatPrice(cartTotal)}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography color="grey.600">Giảm giá</Typography>
            <Typography>-{formatPrice(discount)}</Typography>
          </Stack>
        </Stack>

        <Divider />

        <Stack direction="row" justifyContent="space-between" sx={{ pt: 2 }}>
          <Typography variant="h6">Tổng hóa đơn</Typography>
          <Typography variant="h6" color="secondary.main">
            {formatPrice(cartTotal - discount)}
          </Typography>
        </Stack>
      </Paper>

      {hide ?? (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          disableElevation
          sx={{ mt: 2 }}
          onClick={() => {
            navigate('/checkout');
          }}
        >
          Mua hàng
        </Button>
      )}
    </>
  );
}

export default CartTotal;
