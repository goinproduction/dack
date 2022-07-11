import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import { formatPrice, calcPercentSale } from '../../../utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product }) {
  return (
    <div>
      <Typography sx={{ mb: 1 }}>
        Thương hiệu {product.branch} | Đã bán {product.sell_quantity}
      </Typography>
      <Typography component="h1" variant="h5">
        {product.name}
      </Typography>
      <Box sx={{ mt: 2, mb: 4, p: 2, bgcolor: 'grey.100' }}>
        <Stack spacing={2} direction="row" alignItems="flex-end">
          <Typography
            component="bdi"
            variant="h4"
            color="secondary.main"
            fontWeight="500"
            sx={{ fontSize: { xs: '22px' } }}
          >
            {formatPrice(product.salePrice)}
          </Typography>
          <Typography component="del" variant="body2" color="grey.500">
            {formatPrice(product.regularPrice)}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{
              color: 'grey.900',
            }}
          >
            {calcPercentSale(product.regularPrice, product.salePrice)}
          </Typography>
        </Stack>
      </Box>
    </div>
  );
}

export default ProductInfo;
