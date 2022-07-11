import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Skeleton, Stack } from '@mui/material';
import { rootStyle, listStyle, itemStyle } from './categoryStyle';

CategorySkelentonList.propTypes = {
  length: PropTypes.number,
};

CategorySkelentonList.defaultProps = {
  length: 10,
};

function CategorySkelentonList({ length }) {
  return (
    <Box sx={{ ...rootStyle }}>
      <Stack spacing={2} sx={{ ...listStyle }}>
        {Array.from(new Array(length)).map((element, index) => (
          <Stack key={index} sx={{ ...itemStyle }}>
            <Skeleton variant="rect" width="100%" sx={{ height: { xs: '75px', md: '104px' } }} />
            <Skeleton width="80%" sx={{ mt: 1 }} />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

export default CategorySkelentonList;
