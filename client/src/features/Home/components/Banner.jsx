import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

Banner.propTypes = {
  data: PropTypes.object,
};

function Banner({ data }) {
  return (
    <Link to={data.path}>
      <Box
        component="img"
        width="100%"
        height="100%"
        sx={{ bgcolor: 'grey.50', borderRadius: 2, minHeight: { lg: 261.638 } }}
        src={data.src}
        alt={data.alt}
      />
    </Link>
  );
}

export default Banner;
