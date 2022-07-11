import { Grid, Stack, Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from 'utils';
import RemoveItem from './RemoveItem';

ProductCart.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

const hideOnMobile = { display: { xs: 'none', md: 'block' } };

function ProductCart({ cartItem }) {
  const { product, selected } = cartItem;
  return (
    <Grid container color="grey.800" spacing={2}>
      <Grid item xs={1.5} sx={{ ...hideOnMobile }}>
        <RemoveItem type="icon" id={cartItem.id} />
      </Grid>

      <Grid item xs={3} md={2.5} component={Link} to={`/product/${product._id}`}>
        <Box
          component="img"
          width="100%"
          src={product.image[0]}
          alt={product.name}
          sx={{ borderRadius: 1, border: 1, borderColor: 'grey.300' }}
        />
      </Grid>

      <Grid item xs={9} md={8}>
        <Typography component="p" variant="subtitle2" fontWeight="400" sx={{ mb: 0.5 }}>
          <MuiLink
            component={Link}
            to={`/product/${product._id}`}
            underline="none"
            color="inherit"
            sx={{
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            {product.name}
          </MuiLink>
        </Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography component="span" color="#797F92" fontWeight="400" fontSize="14px">
            {selected.key}:
          </Typography>
          <Typography component="span" fontWeight="500" fontSize="14px">
            {selected.value}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="end" sx={{ mt: 1 }}>
          <Typography component="bdi" fontSize="14px" color="secondary.main" fontWeight="500">
            {formatPrice(product.salePrice)}
          </Typography>
          <Typography component="del" fontSize="13px" color="grey.500" sx={{ ...hideOnMobile }}>
            {formatPrice(product.regularPrice)}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ProductCart;
