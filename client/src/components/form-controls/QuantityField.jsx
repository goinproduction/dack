import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FormHelperText, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {};

function QuantityField(props) {
  const { form, name, label } = props;
  const { formState, setValue } = form;
  const hasError = !!formState.errors[name];

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (Number.parseInt(value) <= 1) {
      setValue(name, 1, {
        shouldValidate: true,
      });
    } else {
      setValue(name, Number.parseInt(value), {
        shouldValidate: true,
      });
    }
  };

  const handleDescrease = (value) => {
    let quanity = Number.parseInt(value);
    if (quanity <= 1) {
      setValue(name, 1);
    } else {
      setValue(name, quanity - 1);
    }
  };

  const handleInscrease = (value) => {
    setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1, {
      shouldValidate: true,
    });
  };

  return (
    <FormControl error={hasError} variant="outlined">
      {label && <Typography mb={1}>{label}</Typography>}

      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <OutlinedInput
            type="number"
            value={value}
            onChange={(e) => {
              onChange(e);
              handleOnChange(e);
            }}
            onBlur={onBlur}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="Descrease quantity"
                  onClick={() => handleDescrease(value)}
                  edge="start"
                  disabled={Boolean(value <= 1)}
                >
                  <RemoveIcon />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Inscrease quantity"
                  onClick={() => handleInscrease(value)}
                  edge="end"
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            }
            size="small"
            sx={{
              fontSize: '14px',
              maxWidth: '15ch',

              '& input': { textAlign: 'center', fontWeight: 500 },
              /* Chrome, Safari, Edge, Opera */
              '&::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
              },

              /* Firefox */
              '&[type=number]': {
                MozAppearance: 'textfield',
              },
            }}
          />
        )}
      />
      <FormHelperText>{formState.errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
