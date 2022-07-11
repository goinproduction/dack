import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Tabs, Tab } from '@mui/material';
import ProductList from 'features/Product/components/ProductList';
import ProductSkeletonList from 'features/Product/components/ProductSkeletonList';

ProductTabs.propTypes = {
  data: PropTypes.array,
  tabList: PropTypes.array.isRequired,
  defaultTab: PropTypes.string,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
};

function ProductTabs({ data, tabList, defaultTab, onChange, loading }) {
  const handleChangeTab = (event, newTab) => {
    if (!onChange) return;
    onChange(newTab);
  };

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Tabs
          value={defaultTab}
          onChange={handleChangeTab}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              mr: 1,
              p: '4px 10px',
              border: 1,
              borderRadius: 1,
              minHeight: '40px',
            },
            '& .MuiTabs-indicator': {
              display: 'none',
            },
          }}
        >
          {tabList.map((tab, index) => (
            <Tab key={index} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </Box>
      {loading ? <ProductSkeletonList length={12} /> : <ProductList data={data} />}
    </>
  );
}

export default ProductTabs;
