import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Banner from './Banner';
import { Box } from '@mui/material';

BannerSlider.propTypes = {
  data: PropTypes.array,
};

const swiperStyle = {
  '--swiper-theme-color': '#333333',
  '--swiper-navigation-size': { xs: '16px', sm: '32px' },
  height: '100%',

  '& .swiper-button-prev, & .swiper-rtl .swiper-button-next': {
    left: 0,
    borderRadius: '0px 4px 4px 0px',
  },
  '& .swiper-button-next, & .swiper-rtl .swiper-button-prev': {
    right: 0,
    borderRadius: '4px 0px 0px 4px',
  },

  '& .swiper-button-next, & .swiper-button-prev': {
    '--swiper-theme-color': '#fff',
    p: { xs: '15px 10px', sm: '30px 20px' },
    top: { xs: '35%', sm: '40%' },
    bgcolor: 'rgba(0, 0, 0, 0.3)',
    opacity: '0.3',
    transition: '0.3s ease opacity',
  },
  '&:hover .swiper-button-next, &:hover .swiper-button-prev': {
    opacity: 1,
  },

  '&.swiper-horizontal': {
    pb: { xs: 5, md: 0 },
  },

  '& .swiper-pagination-bullet.swiper-pagination-bullet-active': {
    width: '20px',
    borderRadius: 1,
  },
};

function BannerSlider({ data }) {
  return (
    <Box
      component={Swiper}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop
      spaceBetween={0}
      slidesPerView={1}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      sx={{ ...swiperStyle }}
    >
      {data.map((slider) => (
        <SwiperSlide key={slider.id}>
          <Banner data={slider} />
        </SwiperSlide>
      ))}
    </Box>
  );
}

export default BannerSlider;
