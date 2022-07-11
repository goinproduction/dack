import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <Box
      sx={{
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Typography component="h1" variant="h6" mb={2} textAlign="center">
        Bạn chưa có sản phẩm nào trong giỏ hàng.
      </Typography>
      <Button component={Link} to="/collection/all" variant="outlined" color="secondary">
        Quay trở lại cửa hàng
      </Button>
    </Box>
  );
}

export default EmptyCart;
