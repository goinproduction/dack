import React from 'react';
import Product from './Product';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

ProductList.propTypes = {
  data: PropTypes.array,
};

function ProductList({ data }) {
  return (
    <Grid container spacing={3}>
      {data?.map((product) => (
        <Grid item key={product._id} xs={6} sm={4} md={3} lg={2}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
