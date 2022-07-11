import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from './useStyle';

function Linkaccount(props) {
  const {
    title,
    href,
    underline,
    iconStart,
    iconEnd,
    endButton,
    onChangeShowAdd,
    handleClick,
    ...rest
  } = props;
  const classes = useStyle();

  return (
    <>
      <Link to={href} underline={underline} className={classes.root} onClick={handleClick}>
        <Typography>
          <img className={classes.icon} src={iconStart}></img>
          {title}
        </Typography>
        {iconEnd ? (
          <img src={iconEnd}></img>
        ) : (
          <Button onClick={onChangeShowAdd}>{endButton}</Button>
        )}
      </Link>
    </>
  );
}

Linkaccount.propTypes = {};

export default Linkaccount;
