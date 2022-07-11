import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

function LoadingScreen() {
  useEffect(() => {
    document.body.style.overflowY = 'scroll';
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#EEF1F8',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingScreen;
