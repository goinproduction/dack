import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'components/common/Page';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

function NotFound() {
  return (
    <Page title="Trang không tìm thấy | Page Not Found | 404 ">
      <Stack
        justifyContent="center"
        alignItems="center"
        px={4}
        sx={{ textAlign: 'center', minHeight: '60vh' }}
      >
        <Typography component="h1" variant="h1" sx={{ fontWeight: 500, lineHeight: 1 }}>
          404
        </Typography>
        <Typography component="h2" variant="h6">
          Xin lỗi, Trang không tìm thấy!
        </Typography>
        <Typography component="p" variant="body2" mt={1} mb={3}>
          Trang bạn đang tìm kiếm đã được xóa hoặc đổi tên hoặc tạm thời không công khai.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="secondary"
          disableElevation
          startIcon={<HomeIcon />}
        >
          Về trang chủ
        </Button>
      </Stack>
    </Page>
  );
}

export default NotFound;
