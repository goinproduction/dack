import axiosClient from './axiosClient';

const categoryApi = {
  getAll() {
    const url = '/product/getAllCategories';
    return axiosClient.get(url);
  },
};

export default categoryApi;
