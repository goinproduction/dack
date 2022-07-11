import { FormControlLabel, FormHelperText, Radio, Typography, Stack } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';
import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

VaraintRadioField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
};

VaraintRadioField.defaultProps = {
  label: '',
};

function VaraintRadioField(props) {
  const { form, name, label, options } = props;
  const { formState } = form;
  const hasError = !!formState.errors[name];

  return (
    <FormControl error={hasError} variant="outlined">
      {label && <Typography mb={1}>{label}</Typography>}
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <RadioGroup defaultValue={options?.[0]} {...field} sx={{ mb: -1 }}>
            <Stack direction="row" flexWrap="wrap">
              {options?.map((item, index) => (
                <FormControlLabel
                  key={index}
                  value={item}
                  label={item}
                  control={<Radio sx={{ display: 'none' }} />}
                  sx={{
                    ml: 0,
                    mr: 1,
                    mb: 1,
                    '& .MuiFormControlLabel-label': {
                      p: '8px 14px',
                      border: 1,
                      borderRadius: 1,
                      borderColor: 'grey.400',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'grey.800',
                    },
                    '& .Mui-checked + .MuiFormControlLabel-label': {
                      borderColor: 'primary.main',
                      color: 'primary.main',
                    },
                  }}
                />
              ))}
            </Stack>
          </RadioGroup>
        )}
      />

      <FormHelperText>{formState.errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default VaraintRadioField;
