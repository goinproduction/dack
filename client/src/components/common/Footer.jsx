import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import LogoPayment from 'assets/images/logo-payment.png';
import { FOOTER_MENU } from 'constants';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import { alpha } from '@mui/material/styles';

function Footer(props) {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'grey.400' }}>
      <Container>
        <Grid container sx={{ py: 6 }} rowSpacing={{ xs: 4, md: 2 }} columnSpacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} md={4}>
            <Link to="/">
              <Logo />
            </Link>
            <Typography component="p" sx={{ mt: 2 }}>
              Ứng dụng phân tán 18_1
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 2,
                '& a': {
                  color: 'common.white',
                },
              }}
            >
              <a
                href="//www.facebook.com/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlinedIcon />
              </a>
              <a
                href="//www.youtube.com/"
                aria-label="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </a>
              <a
                href="//www.instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </Stack>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={3}>
            <Typography
              component="h3"
              variant="subtitle2"
              sx={{ color: 'common.white', textTransform: 'uppercase' }}
            >
              Liên kết nhanh
            </Typography>
            <Box component="ul" sx={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {FOOTER_MENU.map((item) => (
                <Box
                  component="li"
                  key={item.path}
                  sx={{
                    mt: 1,
                    '&:first-of-type': {
                      mt: 2,
                    },
                  }}
                >
                  <MuiLink
                    to={item.path}
                    component={Link}
                    color="grey.400"
                    sx={{
                      '&:hover': {
                        color: 'common.white',
                      },
                    }}
                    underline="none"
                  >
                    {item.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={5}>
            <Typography
              component="h3"
              variant="subtitle2"
              sx={{ color: 'common.white', textTransform: 'uppercase' }}
            >
              Hỗ trợ thanh toán
            </Typography>
            <Box
              component="img"
              src={LogoPayment}
              alt="Logo Payment"
              sx={{ mt: 2, maxWidth: '250px' }}
            />
          </Grid>
        </Grid>
        {/* Copyright */}
        <Grid container sx={{ py: 2, borderTop: 1, borderColor: alpha('#fff', '0.25') }}>
          <Grid item>
            <Typography component="p" variant="body2">
              © {new Date().getFullYear()} AZSHOP. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
