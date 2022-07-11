import { Grid, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from 'utils';

Result.propTypes = {
  product: PropTypes.object.isRequired,
};

function Result({ product }) {
  return (
    <Grid container color="grey.800" spacing={2}>
      <Grid item xs={2}>
        <img width="100%" src={product.image[0]} alt={product.name} />
      </Grid>
      <Grid item xs={10}>
        <Typography component="p" variant="body2" sx={{ mb: 1 }}>
          {product.name}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="end">
          <Typography component="bdi" fontSize="14px" color="secondary.main">
            {formatPrice(product.salePrice)}
          </Typography>
          <Typography component="del" fontSize="12px" color="grey.400">
            {formatPrice(product.regularPrice)}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Result;
