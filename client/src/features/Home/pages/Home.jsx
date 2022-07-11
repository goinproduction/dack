import React, { useEffect } from 'react';

import Page from 'components/common/Page';
import Section from 'components/common/Section';
import Hero from '../components/Hero';
import { BANNER_SLIDER, BANNER_RIGHT } from 'constants';
import { useSelector, useDispatch } from 'react-redux';
import { categoryActions } from 'features/Product/categorySlice';
import CategorySkelentonList from 'features/Product/components/category/CategorySkeletonList';
import CategoryList from 'features/Product/components/category/CategoryList';
import { useState } from 'react';
import productApi from 'api/productApi';
import ProductTabs from '../components/ProductTabs';

function Home() {
  const categoryList = useSelector((state) => state.category.list);
  const loadingCategory = useSelector((state) => state.category.loading);
  const [defaultProductList, setDefaultProductList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [currentTab, setCurrentTab] = useState('default');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryActions.getAll());
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      try {
        setLoadingProduct(true);
        const res = await productApi.getAll(1, 12);
        if (res) {
          const limitProduct = res.productLst.slice(0, 12);
          setDefaultProductList(limitProduct);
          setProductList(limitProduct);
          setLoadingProduct(false);
        }
      } catch (error) {
        setLoadingProduct(false);
        console.log('Fail to fetch product list', error);
      }
    })();
  }, []);

  const handleChangeTab = (newTab) => {
    if (productList.length < 0) return;
    setCurrentTab(newTab);
    const newProductList = [...defaultProductList];
    switch (newTab) {
      case 'bestSelling':
        newProductList.sort((a, b) => b.sell_quantity - a.sell_quantity);
        break;
      case 'salePriceASC':
        newProductList.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case 'salePriceDESC':
        newProductList.sort((a, b) => b.salePrice - a.salePrice);
        break;
      default:
        break;
    }
    setProductList(newProductList);
  };

  return (
    <Page title="Trang chủ">
      <Hero bannerSlider={BANNER_SLIDER} bannerRight={BANNER_RIGHT} />
      <Section title="Danh mục sản phẩm">
        {loadingCategory ? <CategorySkelentonList /> : <CategoryList data={categoryList} />}
      </Section>

      <Section title="Hôm nay có gì?" readMore={{ link: '/collection/all', text: 'Xem tất cả' }}>
        <ProductTabs
          data={productList}
          onChange={handleChangeTab}
          defaultTab={currentTab}
          loading={loadingProduct}
          tabList={[
            {
              label: 'Sản phẩm mới',
              value: 'default',
            },
            {
              label: 'Bán chạy',
              value: 'bestSelling',
            },
            {
              label: 'Giá thấp',
              value: 'salePriceASC',
            },
            {
              label: 'Giá cao',
              value: 'salePriceDESC',
            },
          ]}
        />
      </Section>
    </Page>
  );
}

export default Home;
