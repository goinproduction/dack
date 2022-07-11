import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Link, Modal, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { cartActions } from '../cartSlice';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

RemoveItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  sx: PropTypes.object,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

function RemoveItem({ id, type, sx }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRemove = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div>
      {type === 'icon' && (
        <CloseIcon onClick={handleOpen} sx={{ '&:hover': { cursor: 'pointer' }, ...sx }} />
      )}

      {type === 'text' && (
        <Typography onClick={handleOpen} sx={sx}>
          <Link color="inherit" underline="none">
            Xóa
          </Link>
        </Typography>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
            Bạn muốn xoá sản phẩm này?
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button onClick={handleClose} variant="outlined" fullWidth>
              Không
            </Button>
            <Button
              onClick={handleRemove}
              variant="contained"
              color="error"
              fullWidth
              disableElevation
            >
              Có
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default RemoveItem;
