import { Card, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from './useStyle';

function CardProduct(props) {
  const { href, img, name, attribute, quantity, price, ...rest } = props;
  const classes = useStyle();

  const ContentProduct = (
    <>
      <Divider />
      <Card variant="none" className={classes.cardProduct}>
        <img src={img} alt={name} />
        <Box>
          <Typography className={`${classes.title}`}>{name}</Typography>
          <Box>
            <Typography sx={{ color: '#797F92' }}>{attribute}</Typography>
            <Typography>x{quantity}</Typography>
          </Box>
          <Typography className={`${classes.price}`}>
            {Intl.NumberFormat('de-DE').format(price)}
          </Typography>
        </Box>
      </Card>
      <Divider />
    </>
  );

  if (!href) {
    return ContentProduct;
  }
  return (
    <Link to={href} style={{ textDecorationLine: 'none' }}>
      {ContentProduct}
    </Link>
  );
}

export default CardProduct;
