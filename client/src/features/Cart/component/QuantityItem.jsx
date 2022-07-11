import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../cartSlice';

QuantityItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

function QuantityItem({ cartItem }) {
  const { id } = cartItem;
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const dispatch = useDispatch();

  const handleDescrease = () => {
    setQuantity((x) => x - 1);
  };

  const handleInscrease = () => {
    setQuantity((x) => x + 1);
  };

  useEffect(() => {
    if (cartItem.quantity !== quantity) {
      dispatch(cartActions.setQuantity({ id, quantity }));
    }
  }, [dispatch, id, quantity, cartItem.quantity]);

  return (
    <OutlinedInput
      type="number"
      value={quantity}
      startAdornment={
        <InputAdornment position="start">
          <IconButton
            aria-label="Descrease quantity"
            onClick={handleDescrease}
            edge="start"
            disabled={Boolean(quantity <= 1)}
          >
            <RemoveIcon />
          </IconButton>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="Inscrease quantity" onClick={handleInscrease} edge="end">
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
  );
}

export default QuantityItem;
