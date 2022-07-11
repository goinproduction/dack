import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
  CircularProgress
} from '@mui/material';
import Box from '@mui/material/Box';
import Page from 'components/common/Page';
import * as React from 'react';
import productAPI from '../../../api/productApi';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import Header from 'components/common/Header';
import ProductSkeletonList from '../components/ProductSkeletonList';

function ListPage() {
  const [products, setProducts] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [filter, setFilter] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [sortBy, setSortBy] = React.useState('best_selling');
  const limit = 12;
  const totalProducts = 16;

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await productAPI.getAll(currentPage, limit);
      setProducts(response?.productLst);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchProductsByCategory = async () => {
    try {
      setIsLoading(true);
      const response = await productAPI.getByCategory(filter, currentPage, limit);
      setProducts(response?.category?.productLst);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeTab = (event) => {
    if (products.length < 0) return;
    let newProductList = [...products];
    setSortBy(event.target.value);
    switch (event.target.value) {
      case 'best_selling':
        newProductList.sort((a, b) => b.sell_quantity - a.sell_quantity);
        break;
      case 'price_asc':
        newProductList.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case 'price_desc':
        newProductList.sort((a, b) => b.salePrice - a.salePrice);
        break;
      default:
        break;
    }
    setProducts(newProductList);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    fetchProducts();
  }, [currentPage, limit]);

  React.useEffect(() => {
    if (filter == 'all') {
      fetchProducts();
      return;
    }
    fetchProductsByCategory();
  }, [filter, currentPage, limit]);

  return (
    <Page title="Danh sách sản phẩm" header={<Header headerMobile="productDetail" />}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.54)',
          height: 50,
          fontSize: '12px',
          padding: '12px',
        }}
      >
        <Typography>Trang chủ</Typography>
        <ArrowForwardIosIcon sx={{ ml: '10px', mr: '10px' }} fontSize="small" />
        <Typography>Danh sách sản phẩm</Typography>
      </Box>
      <Box sx={{ pl: '12px', pr: '12px', pt: '20px', pb: '20px', backgroundColor: 'white' }}>
        <Typography sx={{ color: 'rgba(0, 0, 0, 0.54)' }}>Danh sách sản phẩm</Typography>
        <Typography sx={{ fontSize: '20px', fontWeight: 500 }}></Typography>
      </Box>
      <Grid
        sx={{
          mt: '10px',
          pl: '12px',
          pr: '12px',
          backgroundColor: 'white',
          height: 'fit',
          width: '100%',
        }}
      >
        <ButtonGroup
          sx={{ display: 'flex', justifyContent: 'space-between', pt: '20px', pb: '20px' }}
        >
          <Button
            id="filter-button"
            onClick={handleClick}
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            sx={{
              minWidth: '48px',
              height: '40px',
              color: 'rgba(0, 0, 0, 0.6)',
              pl: '10px',
              pr: '10px',
              border: '1px solid rgba(0, 0, 0, 0.23)',
              borderRadius: '4px',
              textTransform: 'none',
            }}
          >
            <FilterAltIcon sx={{ color: 'rgba(0, 0, 0, 0.54)', pr: '5px' }} />
            Lọc
          </Button>
          <Filter
            anchorEl={anchorEl}
            open={open}
            handleClose={handleClose}
            getFilter={(value) => setFilter(value)}
          />
          <FormControl sx={{ minWidth: '100px', maxHeight: '40px' }}>
            <InputLabel sx={{ top: '-7px' }}>Sắp xếp</InputLabel>
            <Select defaultValue="best_selling" label="Sắp xếp" sx={{ height: '40px' }} onChange={handleChangeTab} value={sortBy}>
              <MenuItem value="price_desc">Giá cao - thấp</MenuItem>
              <MenuItem value="price_asc">Giá thấp - cao</MenuItem>
              <MenuItem value="best_selling">Bán chạy</MenuItem>
            </Select>
          </FormControl>
        </ButtonGroup>
        {isLoading 
        ? 
          (
            // <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            //   <CircularProgress />
            // </Box>
            <ProductSkeletonList length={limit}/> 
          ) 
          :
          <ProductList data={products} />
        }
        
        
        <Stack sx={{ mt: '1rem', pb: '1rem', display: 'flex', alignItems: 'center' }}>
          <Pagination
            count={Math.ceil(totalProducts/limit)}
            page={currentPage}
            onChange={(event, page) => setCurrentPage(page)}
          />
        </Stack>
      </Grid>
    </Page>
  );
}

export default ListPage;
