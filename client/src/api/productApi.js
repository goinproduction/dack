import axiosClient from './axiosClient';

const productApi = {
  getAll(page = 1, limit = 10) {
    const url = `/product/getAllProducts?_limit=${limit}&_page=${page}`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/product/getProduct?productId=${id}`;
    return axiosClient.get(url);
  },
  getByCategory(id, page = 1, limit = 10) {
    const url = `/product/getAllProductsByCateId?categoryId=${id}&_page=${page}&_limit=${limit}`;
    return axiosClient.get(url);
  },
  searchProduct(name, requestConfig) {
    const url = `/product/searchProduct`;
    return axiosClient.post(url, { payload: name }, requestConfig);
  },
};

export default productApi;
