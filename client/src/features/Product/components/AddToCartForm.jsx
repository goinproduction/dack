import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import QuantityField from 'components/form-controls/QuantityField';
import { Button, Stack, Grid, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import VaraintRadioField from 'components/form-controls/VariantRadioField';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
  product: PropTypes.object,
};

function AddToCartForm({ product, onSubmit }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Please enter quantity')
      .min(1, 'Minimum value is 1')
      .typeError('Please enter a number'),
    selection: yup.string(),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
      selection: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    form.setValue('selection', product.selection?.[0].value?.[0], {
      shouldValidate: true,
    });
  }, [form, product]);

  const handleSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  const renderSelection = product.selection?.map((item, index) => (
    <Grid container key={index} alignItems="center" rowGap={1}>
      <Grid item xs={12} md={2}>
        <Typography component="p" variant="subtitle2">
          {item.key}
        </Typography>
      </Grid>
      <Grid item xs={12} md={10}>
        <VaraintRadioField name="selection" form={form} options={item.value} />
      </Grid>
    </Grid>
  ));

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Stack spacing={3}>
        {product.selection && renderSelection}

        <Grid container alignItems="center" rowGap={1}>
          <Grid item xs={12} md={2}>
            <Typography component="p" variant="subtitle2">
              Số lượng
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <QuantityField name="quantity" form={form} />
          </Grid>
        </Grid>
      </Stack>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        size="large"
        disableElevation
        fullWidth
        sx={{
          mt: 5,
          padding: '10px 24px',
          maxWidth: '40ch',
        }}
      >
        Thêm vào giỏ
      </Button>
    </form>
  );
}

export default AddToCartForm;
