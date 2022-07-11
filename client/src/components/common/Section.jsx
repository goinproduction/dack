import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

import { Link } from 'react-router-dom';

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
  readMore: PropTypes.object,
};

function Section({ title, readMore, children }) {
  return (
    <Paper elevation={0} sx={{ px: 2, pt: 2, pb: 3, mb: { xs: 2, md: 4 } }}>
      <Box sx={{ borderBottom: 1, pb: 1, mb: 2, borderColor: 'grey.200' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography component="h2" variant="h6">
            {title}
          </Typography>
          {readMore && (
            <MuiLink component={Link} to={readMore.link} underline="none">
              {readMore.text}
            </MuiLink>
          )}
        </Stack>
      </Box>
      {children}
    </Paper>
  );
}

export default Section;
