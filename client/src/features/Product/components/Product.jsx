import { Card, CardMedia, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { calcPercentSale, formatPrice } from 'utils';

Product.protoTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return (
    <Card
      component={Link}
      to={`/product/${product._id}`}
      position="static"
      sx={{
        textDecoration: 'none',
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={product.image[0]}
        alt="img"
        sx={{ height: '170px', borderRadius: 1 }}
      />
      <Typography
        component="h3"
        sx={{
          pt: 1,
          pb: 1,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '2',
          overflow: 'hidden',
          fontSize: '14px',
          fontWeight: 400,
          maxHeight: '50px',
        }}
      >
        {product.name}
      </Typography>

      <Stack direction="row" spacing={1} alignItems="center" mt={0.5}>
        <Typography component="bdi" sx={{ fontSize: { xs: '14px', md: '16px', fontWeight: 500 } }}>
          {formatPrice(product.salePrice)}
        </Typography>
        <Typography
          component="span"
          fontSize="12px"
          color="primary.main"
          sx={{
            bgcolor: '#E9F5FF',
            border: 0.5,
            borderRadius: 0.5,
            borderColor: 'primary.main',
            px: 0.5,
          }}
        >
          {calcPercentSale(product.regularPrice, product.salePrice)}
        </Typography>
      </Stack>

      {product.sell_quantity > 0 && (
        <Typography component="p" fontSize="12px" color="grey.600" mt={0.25}>
          Đã bán {product.sell_quantity}
        </Typography>
      )}
    </Card>
  );
}

export default Product;
