import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { itemStyle } from './categoryStyle';
import { Box } from '@mui/system';

Category.propTypes = {
  category: PropTypes.object,
};

function Category({ category }) {
  return (
    <Stack
      component={Link}
      to={`/collection/${category._id}`}
      sx={{
        ...itemStyle,

        '&:hover img': {
          transform: 'translateY(-8px)',
          transition: '.2s linear transform',
        },
        '& img': {
          transition: '.2s linear transform',
        },

        textDecoration: 'none',
        color: 'text.primary',
        userSelect: 'none',
        cursor: 'pointer',
      }}
    >
      <Box
        component="img"
        width="100%"
        src={category.image}
        alt={category.title}
        sx={{ minHeight: { md: 'unset', lg: '104px' } }}
      />
      <Typography
        component="h3"
        variant="body2"
        sx={{
          display: '-webkit-box',
          maxHeight: { xs: '2.625rem', md: '3rem' },
          px: 0.5,

          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '2',
          fontSize: { xs: '.75rem', md: '.875rem' },
          lineHeight: { xs: '1rem', md: '1.2rem' },
          textTransform: 'capitalize',
          wordWrap: 'break-word',
          whiteSpace: 'normal',
        }}
      >
        {category.title}
      </Typography>
    </Stack>
  );
}

export default Category;
