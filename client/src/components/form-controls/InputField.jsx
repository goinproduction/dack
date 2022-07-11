import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './useStyle';

function InputField(props) {
  const { startAdornment, endAdornment, error, inputProps, iconStart, errorMessage, ...propRest } =
    props;
  const classes = useStyle();

  return (
    <>
      <TextField
        classes={classes}
        error={error}
        fullWidth
        InputProps={{
          disableUnderline: true,
          startAdornment,
          endAdornment,
        }}
        inputProps={inputProps}
        InputLabelProps={{
          shrink: false,
        }}
        variant="filled"
        {...propRest}
      />
      {errorMessage && (
        <Typography variant="body2" color={'error'}>
          {errorMessage}
        </Typography>
      )}
    </>
  );
}

InputField.propTypes = {
  startAdornment: PropTypes.any,
  endAdornment: PropTypes.any,
  error: PropTypes.bool,
  inputProps: PropTypes.any,
  errorMessage: PropTypes.string,
};

InputField.defaultProps = {
  endAdornment: null,
  error: false,
  inputProps: {},
};

export default InputField;
