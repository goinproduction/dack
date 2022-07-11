import React from 'react';
import Page from 'components/common/Page';
import SearchBar from '../components/SearchBar';
import Header from 'components/common/Header';
import { Box } from '@mui/system';

function SearchPage(props) {
  return (
    <Page
      title="Tìm kiếm sản phẩm"
      header={<Header headerMobile="onlyTitle" titleMobile="Tìm kiếm sản phẩm" />}
      footer=""
    >
      <Box px={2}>
        <SearchBar />
      </Box>
    </Page>
  );
}

export default SearchPage;
