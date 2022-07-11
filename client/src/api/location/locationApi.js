import axiosLocation from './axiosLocation';

const locationAPI = {
  //tỉnh
  province: async () => {
    const url = '/cities.json';
    return await axiosLocation.get(url);
  },
  //quận
  district: async (provinceId) => {
    const url = `/districts/${provinceId}.json`;
    return await axiosLocation.get(url);
  },
};

export default locationAPI;
