import { Box, Typography } from '@mui/material';
import locationAPI from 'api/location/locationApi';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import location from '../../../assets/icons/location.svg';
import useStyle from './useStyle';

function Saveaddress(props) {
  const classes = useStyle();
  const { onChangeShowUpdate } = props;
  const { province } = useSelector((state) => state.location);
  const { addressDelivery } = useSelector((state) => state.user);
  const [district, setDistrict] = useState([]);

  const locationCity = province.find((value) => value.id == addressDelivery.city)?.name;
  const locationDistrict = useMemo(
    () => district.find((value) => value.id == addressDelivery.district)?.name,
    [district]
  );

  useEffect(() => {
    locationAPI.district(addressDelivery.city).then((res) => {
      setDistrict(res.data);
    });
  }, [addressDelivery]);

  return (
    <Box className={classes.boxSaveAddress}>
      <Box className={classes.flexBox}>
        <div>
          <img src={location} style={{ marginRight: '10px' }}></img>
          {addressDelivery.fullName} - {addressDelivery.phone}
        </div>
      </Box>
      <Typography className={classes.textAddress}>
        {addressDelivery.apartmentNumber}, {addressDelivery.ward}, {locationDistrict},{' '}
        {locationCity}
      </Typography>
    </Box>
  );
}

Saveaddress.propTypes = {};

export default Saveaddress;
