import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './useStyle';

function SelectField(props) {
  const { label, options, onChange, inputRef, value, errorMessage, name, ...rest } = props;
  const { ref: refInput, ...inputProps } = inputRef || { ref: null };
  const classes = useStyle();
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        // onChange={onChange}
        label={label}
        ref={refInput}
        inputProps={{ name: name, id: name }}
        {...inputProps}
        {...rest}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.id}>
            {' '}
            {option.name}{' '}
          </MenuItem>
        ))}
      </Select>
      {errorMessage && (
        <Typography variant="body2" color={'error'}>
          {errorMessage}
        </Typography>
      )}
    </FormControl>
  );
}

SelectField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  inputRef: PropTypes.any,
  value: PropTypes.number,
  name: PropTypes.string,
};

SelectField.defaultProps = {
  label: 'Label',
  options: [],
  onChange: function () {},
};

export default SelectField;
