import { Button, Grid, Typography } from '@mui/material';
import locationAPI from 'api/location/locationApi';
import {
  FETCH_DELIVERY_ADDRESS_REQUEST,
  USER_UPDATE_DELIVERY_ADDRESS_REQUEST,
} from 'app/saga/auth/actionType';
import { FETCH_PROVINCE } from 'app/saga/location/actionType';
import InputField from 'components/form-controls/InputField';
import SelectField from 'components/form-controls/SelectField';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import location from '../../../assets/icons/location.svg';
import useStyle from './useStyle';
import ColoredLinearProgress from '../../../components/common/loadingLinearProgress';
import { loading, notLoading } from '../../Auth/userSlice';

function Updateaddress(props) {
  const { classShow, isNew, action, ...rest } = props;
  const { province } = useSelector((state) => state.location);
  const { userData } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.user);
  const { addressDelivery } = useSelector((state) => state.user);
  const [valueCity, setValueCity] = useState('');
  const [valueDistrict, setValueDistrict] = useState('');
  const dispatch = useDispatch();
  const classes = useStyle();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isNew) {
      setValue('fullName', addressDelivery.fullName);
      setValue('phone', addressDelivery.phone);
      setValue('city', addressDelivery.city);
      setValue('district', addressDelivery.district);
      setValue('ward', addressDelivery.ward);
      setValue('apartmentNumber', addressDelivery.apartmentNumber);
    }
  }, [addressDelivery]);

  useEffect(() => {
    dispatch({ type: FETCH_DELIVERY_ADDRESS_REQUEST, userId: userData.userId });
    dispatch({ type: FETCH_PROVINCE });
  }, []);

  const [district, setDistrict] = useState([{ id: 0, name: 'Chưa chọn thành phố!' }]);

  const handleProvince = async (options) => {
    const res = await locationAPI.district(options);
    setValueCity(options);
    setDistrict(res.data);
  };

  const handleDistrict = (id) => {
    setValueDistrict(id);
  };

  const provinceWatch = watch('city');
  const districtWatch = watch('district');

  useEffect(() => {
    handleProvince(provinceWatch);
  }, [provinceWatch]);

  useEffect(() => {
    handleDistrict(districtWatch);
  }, [districtWatch]);

  const onSubmit = async (data) => {
    try {
      dispatch(loading());
      const params = data;
      await dispatch({
        type: USER_UPDATE_DELIVERY_ADDRESS_REQUEST,
        params,
        userId: userData.userId,
      });
    } catch (e) {
      dispatch(notLoading());
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className={classShow}>
        {isLoading && <ColoredLinearProgress />}

        <Grid
          container
          spacing={2}
          className={`${classes.p20} ${classes.formAddress}`}
          style={{ marginLeft: '0px', width: 'calc(100%)' }}
        >
          <Grid item xs={12} className={`${classes.flexBox} ${classes.p0} ${classes.pt0}`}>
            <div>
              <img src={location} style={{ marginRight: '10px' }}></img>
              {addressDelivery.fullName ? (
                <span>
                  {addressDelivery.fullName} - {addressDelivery.phone}
                </span>
              ) : (
                <span>{userData.fullName} - Chưa có địa chỉ giao hàng</span>
              )}
            </div>
            <Button type="submit">{action}</Button>
          </Grid>
          <Grid item xs={6} className={`${classes.pt0} ${classes.pr5}`}>
            <InputField
              type="text"
              placeholder="Họ và tên"
              inputProps={{
                name: 'fullName',
                autoFocus: true,
                ...register('fullName', {
                  required: 'Vui lòng không bỏ trống tên người nhận!',
                  // pattern: {
                  //   value: /^[a-zA-Z-]+ ?.* [a-zA-Z-]+$/,
                  //   message: 'Tên người nhận không được chứa ký tự đặt biệt hoặc số!',
                  // },
                }),
              }}
              errorMessage={errors.fullName?.message}
            ></InputField>
          </Grid>
          <Grid item xs={6} className={`${classes.pt0} ${classes.pl5}`}>
            <InputField
              type="text"
              placeholder="Số điện thoại"
              inputProps={{
                name: 'phone',
                autoFocus: true,
                ...register('phone', {
                  required: 'Vui lòng không bỏ trống số điện thoại liên lạc!',
                  pattern: {
                    value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                    message: 'Đây không phải kiểu định dạng của số điện thoai!',
                  },
                }),
              }}
              errorMessage={errors.phone?.message}
            />
          </Grid>
          <Grid item xs={6} className={`${classes.pt0} ${classes.pr5}`}>
            <SelectField
              label="Thành phố"
              options={province}
              name="city"
              value={valueCity}
              onChange={handleProvince}
              inputRef={register('city', {
                required: 'Vui lòng chọn thành phố bạn muốn giao hàng!',
              })}
              errorMessage={errors.city?.message}
            />
          </Grid>
          <Grid item xs={6} className={`${classes.pt0} ${classes.pl5}`}>
            <SelectField
              label="Quận"
              options={district}
              value={valueDistrict}
              name="district"
              inputRef={register('district', {
                required: 'Vui lòng chọn quận bạn muốn giao!',
              })}
              errorMessage={errors.district?.message}
            ></SelectField>
          </Grid>
          <Grid item xs={12} className={classes.pt0}>
            <InputField
              type="text"
              placeholder="Phường"
              inputProps={{
                name: 'ward',
                autoFocus: true,
                ...register('ward', {
                  required: 'Vui lòng không bỏ trống phường!',
                }),
              }}
              errorMessage={errors.ward?.message}
            ></InputField>
          </Grid>
          <Grid item xs={12} className={classes.pt0}>
            <InputField
              type="text"
              placeholder="Đường"
              inputProps={{
                name: 'apartmentNumber',
                autoFocus: true,
                ...register('apartmentNumber', {
                  required: 'Vui lòng không bỏ trống số nhà/ địa chỉ cụ thể của bạn!',
                }),
              }}
              errorMessage={errors.apartmentNumber?.message}
            ></InputField>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}

Updateaddress.propTypes = {};

export default Updateaddress;
