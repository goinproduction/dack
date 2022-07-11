import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Category from './Category';
import { rootStyle, listStyle } from './categoryStyle';

CategoryList.propTypes = {
  data: PropTypes.array,
};

function CategoryList({ data }) {
  return (
    <Box sx={{ ...rootStyle }}>
      <Stack spacing={2} sx={{ ...listStyle }}>
        {data.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </Stack>
    </Box>
  );
}

export default CategoryList;
