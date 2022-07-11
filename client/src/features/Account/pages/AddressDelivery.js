import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Updateaddress from '../components/UpdateAddress';
import Saveaddress from '../components/SaveAddress';
import Linkaccount from '../components/LinkAccount';
import location from '../../../assets/icons/location.svg';
import Page from 'components/common/Page';
import Header from 'components/common/Header';
import useStyle from './useStyle';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DELIVERY_ADDRESS_REQUEST } from 'app/saga/auth/actionType';

function AddressDelivery() {
  const classes = useStyle();
  const { addressDelivery } = useSelector((state) => state.user);
  const { userData } = useSelector((state) => state.user);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const onChangeShowUpdate = () => {
    setShowUpdate(!showUpdate);
  };
  const onChangeShowAdd = () => {
    setShowAdd(!showAdd);
  };

  useEffect(async () => {
    // await dispatch({ type: FETCH_DELIVERY_ADDRESS_REQUEST, userId: userData.userId });
  }, [addressDelivery]);

  return (
    <Page
      title="Địa chỉ giao hàng"
      header={<Header headerMobile="onlyTitle" titleMobile="Địa chỉ giao hàng" />}
    >
      <div className={classes.mt18}>
        {addressDelivery?.fullName ? (
          <>
            <Saveaddress onChangeShowUpdate={onChangeShowUpdate} />
            <Updateaddress isNew={false} action="Lưu" />
          </>
        ) : (
          <>
            <Linkaccount
              title="Địa chỉ giao hàng"
              iconStart={location}
              endButton={'Thêm'}
              onChangeShowAdd={onChangeShowAdd}
              href=""
            />
            <Updateaddress
              classShow={showAdd ? classes.show : classes.hide}
              isNew={true}
              action={'Thêm'}
            />
          </>
        )}
      </div>
    </Page>
  );
}

export default AddressDelivery;
