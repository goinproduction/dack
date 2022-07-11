import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import authAPI from 'api/userApi';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputField from '../../../components/form-controls/InputField';
import useStyle from './useStyle';
import ColoredLinearProgress from '../../../components/common/loadingLinearProgress';
import { loading, notLoading } from '../userSlice';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const classes = useStyle();
  const [visiblePw, setVisiblePw] = useState(false);
  const dispatch = useDispatch();
  const [visiblePw_repeat, setVisiblePw_repeat] = useState(false);
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      dispatch(loading());
      const res = await authAPI.register(data);
      if (res.success) {
        dispatch(notLoading());
        toast.success(res.message);
        navigate('/login');
      }
    } catch (e) {
      dispatch(notLoading());
      toast.error(e.response.data.message);
    }
  };

  return (
    <React.Fragment>
      {isLoading && <ColoredLinearProgress />}
      <form
        className={`${classes.root} ${classes.p20} ${classes.mt50}`}
        onSubmit={(e) => e.preventDefault()}
        autoComplete="off"
      >
        <Typography className={`${classes.title}`}>Tạo tài khoản</Typography>
        <InputField
          size="small"
          placeholder="Họ và Tên"
          error={Boolean(errors.name)}
          inputProps={{
            name: 'fullName',
            autoFocus: true,
            ...register('fullName', {
              required: 'Vui lòng không bỏ trống tên người dùng!',
              // pattern: {
              //   value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
              //   message: 'Tên người dùng không được chứa kí tự đặc biệt!',
              // },
            }),
          }}
          errorMessage={errors.fullName?.message}
        />
        <InputField
          size="small"
          placeholder="Email"
          error={Boolean(errors.email)}
          inputProps={{
            name: '',
            ...register('email', {
              required: 'Vui lòng không bỏ trống email!',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Email không đúng định dạng',
              },
            }),
          }}
          errorMessage={errors.email?.message}
        />
        <InputField
          size="small"
          placeholder="Nhập mật khẩu"
          error={Boolean(errors.password)}
          inputProps={{
            name: 'password',
            type: visiblePw ? 'text' : 'password',
            ...register('password', {
              required: 'Vui lòng không bỏ trống mật khẩu!',
              minLength: {
                value: 8,
                message: 'Password phải hơn 8 kí tự',
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                message: 'Phải có ít nhất 1 chữ cái in hoa, 1 chữ thường và 1 kí tự đặt biệt',
              },
            }),
          }}
          endAdornment={
            visiblePw ? (
              <VisibilityIcon
                className={`${classes.icon} ${classes.visiblePw}`}
                onClick={() => setVisiblePw(false)}
              />
            ) : (
              <VisibilityOffIcon className={classes.icon} onClick={() => setVisiblePw(true)} />
            )
          }
          errorMessage={errors.password?.message}
        />
        <InputField
          size="small"
          placeholder="Nhập lại mật khẩu"
          error={Boolean(errors.password_repeat)}
          inputProps={{
            name: 'password_repeat',
            maxLength: 20,
            type: visiblePw_repeat ? 'text' : 'password',
            ...register('password_repeat', {
              required: 'Vui lòng không bỏ trống ô nhập lại mật khẩu!',
              validate: (value) =>
                value === watch('password') || 'Không khớp với password đã nhập ở trên!',
            }),
          }}
          endAdornment={
            visiblePw_repeat ? (
              <VisibilityIcon
                className={`${classes.icon} ${classes.visiblePw}`}
                onClick={() => setVisiblePw_repeat(false)}
              />
            ) : (
              <VisibilityOffIcon
                className={classes.icon}
                onClick={() => setVisiblePw_repeat(true)}
              />
            )
          }
          errorMessage={errors.password_repeat?.message}
        />
        <Button
          className={classes.btn}
          type="submit"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
        >
          Đăng Ký
        </Button>

        <Typography variant="subtitle2" className={`${classes.subTitle}`}>
          Bạn đã có tài khoản? Đăng nhập
          <Link variant="body2" to="/login">
            tại đây
          </Link>
        </Typography>
      </form>
    </React.Fragment>
  );
}

export default RegisterForm;
