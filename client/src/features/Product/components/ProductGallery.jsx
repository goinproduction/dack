import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper';

ProductGallery.propTypes = {
  product: PropTypes.object,
};

function ProductGallery({ product }) {
  const gallery = product.image;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imageList = gallery?.map((image, index) => (
    <SwiperSlide key={index}>
      <Box
        component="img"
        src={image}
        alt={product.name}
        width="100%"
        sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </SwiperSlide>
  ));

  return (
    <Box sx={{ '--swiper-theme-color': '#fff' }}>
      {/* Main */}
      <Box
        component={Swiper}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
      >
        {imageList}
      </Box>

      {/* Thumbnail */}
      <Box
        component={Swiper}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        modules={[FreeMode, Navigation, Thumbs]}
        freeMode
        watchSlidesProgress
        sx={{
          mt: '10px',
          '& .swiper-slide': {
            opacity: 0.4,
          },
          '& .swiper-slide-thumb-active': {
            opacity: 1,
          },
        }}
      >
        {imageList}
      </Box>
    </Box>
  );
}

export default ProductGallery;
