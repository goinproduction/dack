import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Button, Typography } from '@mui/material';
import { USER_LOGIN_REQUEST } from 'app/saga/auth/actionType';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ColoredLinearProgress from '../../../components/common/loadingLinearProgress';
import InputField from '../../../components/form-controls/InputField';
import { loading } from '../userSlice';
import useStyle from './useStyle';

function LoginForm(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.user);
  const token = localStorage.getItem('token');
  const classes = useStyle();
  const [visiblePw, setVisiblePw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  const onSubmit = async (data) => {
    try {
      dispatch(loading());
      dispatch({ type: USER_LOGIN_REQUEST, data });
    } catch (e) {}
  };
  return (
    <React.Fragment>
      {isLoading && <ColoredLinearProgress />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={`${classes.root} ${classes.p20}`}
      >
        <Typography className={`${classes.title} t-center`}>Đăng nhập</Typography>
        {/* <Typography component="p" sx={{ mb: 1 }}>
          Demo: user@gmail.com / User123456
        </Typography> */}

        <InputField
          size="small"
          placeholder="Nhập email"
          error={Boolean(errors.email)}
          inputProps={{
            name: 'email',
            autoFocus: true,
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
            maxLength: 20,
            type: visiblePw ? 'text' : 'password',
            ...register('password', {
              required: 'Vui lòng không bỏ trống password!',
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
        <Button className={classes.btn} type="submit">
          Đăng nhập
        </Button>

        <Typography variant="subtitle2" className={`${classes.subTitle}`}>
          Bạn chưa có tài khoản? Đăng kí
          <Link variant="body2" to={'/register'}>
            tại đây
          </Link>
        </Typography>
      </form>
    </React.Fragment>
  );
}

export default LoginForm;
