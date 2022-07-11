import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

Page.propTypes = {
  title: PropTypes.string,
  header: PropTypes.object,
  footer: PropTypes.object,
  fullWidth: PropTypes.bool,
};

Page.defaultProps = {
  title: 'AZShop',
  header: <Header />,
  footer: <Footer />,
  fullWidth: false,
};

function Page({ title, header, footer, children, fullWidth }) {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  const mainContainer = (
    <Container
      sx={{
        py: { xs: 3, md: 5 },
        px: { xs: 0, md: 2 },
      }}
    >
      {children}
    </Container>
  );

  return (
    <Stack minHeight="100vh">
      {header}

      <Box component="main" flexGrow={1} bgcolor="#EEF1F8">
        {fullWidth ? children : mainContainer}
      </Box>

      {footer}
    </Stack>
  );
}

export default Page;
