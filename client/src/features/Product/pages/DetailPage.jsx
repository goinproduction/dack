import { Grid, Paper, Stack } from '@mui/material';
import { Box } from '@mui/system';
import productApi from 'api/productApi';
import LoadingScreen from 'components/common/LoadingScreen';
import Page from 'components/common/Page';
import Section from 'components/common/Section';
import { cartActions } from 'features/Cart/cartSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddToCartForm from '../components/AddToCartForm';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import Header from 'components/common/Header';
import NotFound from 'features/Home/pages/NotFound';

function DetailPage(props) {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await productApi.get(productId);
        if (res) {
          setLoading(false);
          setProduct(res.product);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.log('Failed to fetch product', error);
        setNotFound(true);
      }
    })();
  }, [productId]);

  if (notFound) {
    return <NotFound />;
  }

  if (loading) {
    return (
      <Box
        component={Page}
        title={product.name}
        header={<Header headerMobile="productDetail" />}
        sx={{
          body: {
            overflowY: 'scroll',
          },
        }}
      >
        <LoadingScreen />
      </Box>
    );
  }

  const handleAddToCartSubmit = (values) => {
    const { quantity, selection } = values;
    const idSelected = product?.selection[0].value.findIndex((value) => value === selection);
    const action = cartActions.addToCart({
      id: `${product._id}-${idSelected}`,
      product,
      quantity,
      selected: { key: product.selection[0].key, value: selection },
    });
    dispatch(action);
    toast.success('Thêm vào giỏ thành công');
  };

  return (
    <Page title={product.name} header={<Header headerMobile="productDetail" />}>
      <Stack spacing={3}>
        <Paper elevation={0} sx={{ p: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4.5}>
              <ProductGallery product={product} />
            </Grid>
            <Grid item xs={12} md={7.5}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} product={product} />
            </Grid>
          </Grid>
        </Paper>

        <Section title="Mô tả sản phẩm">
          <Box sx={{ whiteSpace: 'pre-line' }}>{product.description}</Box>
        </Section>
      </Stack>
    </Page>
  );
}

export default DetailPage;
