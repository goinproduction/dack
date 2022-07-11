import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import BannerSlider from './BannerSlider';

Hero.propTypes = {
  bannerSlider: PropTypes.array,
  bannerRight: PropTypes.object,
};

function Hero({ bannerSlider, bannerRight }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        mt: -3,
        mb: { xs: 0, md: 4 },
        px: { xs: 2, md: 0 },
        background: { xs: 'linear-gradient(0deg, #FFF 40%, #47ABFF 40%)', md: 'unset' },
      }}
    >
      <Box sx={{ pt: 1, pb: 3, display: { xs: 'flex', md: 'none' } }}>
        <Button
          variant="contained"
          disableElevation
          fullWidth
          color="info"
          sx={{ color: 'common.white', textTransform: 'none', fontWeight: '400' }}
          startIcon={<SearchIcon />}
          onClick={() => navigate('/search')}
        >
          Tìm kiếm sản phẩm
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Slider */}
        <Grid item xs={12} md={8} sx={{ mb: { xs: 2, md: 0 } }}>
          <BannerSlider data={bannerSlider} />
        </Grid>
        {/* Banner Right */}
        <Grid item md={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Banner data={bannerRight} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
