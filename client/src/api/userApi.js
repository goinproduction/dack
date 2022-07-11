import axiosClient from './axiosClient';

const authAPI = {
  login: async (params) => {
    const url = '/auth/login';
    return await axiosClient.post(url, params);
  },
  register: async (params) => {
    const url = '/auth/register';
    return await axiosClient.post(url, params);
  },
  updateInformation: async (params, userId) => {
    const url = `/auth/updateUserInfo?userId=${userId}`;
    return await axiosClient.post(url, params);
  },
  updateDeliveryAddress: async (params, userId) => {
    const url = `auth/updateDeliveryAddress?userId=${userId}`;
    console.log(params, 'address');
    return await axiosClient.post(url, params);
  },
  getInformationUser: async (userId) => {
    const url = `auth/getUserInfo?userId=${userId}`;
    return await axiosClient.get(url);
  },
  getDeliveryAddress: async (userId) => {
    const url = `auth/getDeliveryAddress?userId=${userId}`;
    return await axiosClient.get(url);
  },
  getOrder: async (userId) => {
    const url = `/product/getOrders?userId=${userId}`;
    return await axiosClient.get(url);
  },
  getOrderDetail: async (orderId) => {
    const url = `/product/getOrderById?orderId=${orderId}`;
    return await axiosClient.get(url);
  },
  addOrder: async (data) => {
    const url = `/product/checkout`;
    return await axiosClient.post(url, data);
  },
};

export default authAPI;
