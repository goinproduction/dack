import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { arrayOfLength } from '../proptypes';

CartRow.propTypes = {
  children: arrayOfLength.bind(null, 3),
  sx: PropTypes.object,
};

function CartRow({ children, sx }) {
  return (
    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5, ...sx }}>
      <Grid item xs={12} md={7}>
        {children[0]}
      </Grid>

      <Grid item xs={9} md={3} textAlign="center" sx={{ ml: 'auto' }}>
        {children[1]}
      </Grid>

      <Grid item xs={12} md={2} textAlign="right">
        {children[2]}
      </Grid>
    </Grid>
  );
}

export default CartRow;
