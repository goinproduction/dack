import React from 'react';
import { Grid, Skeleton } from '@mui/material';

function ProductSkeletonList({ length }) {
  return (
    <Grid container spacing={3}>
      {Array.from(new Array(length)).map((product, index) => (
        <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
          <Skeleton variant="rect" width="100%" height="170px" />
          <Skeleton width="80%" height="37px" sx={{ mt: 1 }} />
          <Skeleton width="40%" />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductSkeletonList;
