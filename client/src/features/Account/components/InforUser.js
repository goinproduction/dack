import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { USER_UPDATE_INFORMATION_REQUEST } from 'app/saga/auth/actionType';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../../../components/form-controls/InputField';
import useStyle from './useStyle';
import ColoredLinearProgress from '../../../components/common/loadingLinearProgress';
import { loading, notLoading } from '../../Auth/userSlice';

function Inforuser() {
  const classes = useStyle();
  const { userData } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [currentVisiblePw, setCurrentVisiblePw] = useState(false);
  const [newVisiblePw, setNewVisiblePw] = useState(false);
  const [reNewVisiblePw, setReNewVisiblePw] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue('fullName', userData.fullName);
    setValue('email', userData.email);
    setValue('displayName', userData.displayName);
  }, [userData]);

  const onSubmit = async (data) => {
    try {
      dispatch(loading());
      await dispatch({ type: USER_UPDATE_INFORMATION_REQUEST, data, userId: userData.userId });
    } catch (e) {
      dispatch(notLoading());
    }
  };

  return (
    <React.Fragment>
      {isLoading && <ColoredLinearProgress />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={`${classes.root} ${classes.p20}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: 'auto',
          margin: '0px',
        }}
      >
        <Typography className={`${classes.titleInfor}`}>Thông tin tài khoản</Typography>
        <InputField
          size="small"
          placeholder="Họ tên"
          error={Boolean(errors.email)}
          inputProps={{
            name: 'fullName',
            autoFocus: true,
            ...register('fullName', {
              required: 'Vui lòng không bỏ trống tên người dùng!',
              // pattern: {
              //   value: /^[a-zA-Z-]+ ?.* [a-zA-Z-]+$/,
              //   message: 'Tên người dùng không được chứa kí tự đặc biệt hoặc số!',
              // },
            }),
          }}
          errorMessage={errors.fullName?.message}
        />
        <InputField
          disabled
          size="small"
          placeholder="Email"
          error={Boolean(errors.email)}
          inputProps={{
            name: 'email',
            autoFocus: true,
            ...register('email'),
          }}
          errorMessage={errors.email?.message}
        />
        <InputField
          size="small"
          placeholder="Tên hiển thị"
          error={Boolean(errors.email)}
          inputProps={{
            name: 'displayName',
            autoFocus: false,
            ...register('displayName', {
              // pattern: {
              //   value: /^(?![- '])(?![×Þß÷þø])[- '0-9a-zÀ-ÿ]+(?<![- '])$/g,
              //   message: 'DisplayName không được chứa kí tự đặt biệt!',
              // },
            }),
          }}
          errorMessage={errors.displayName?.message}
        />
        <Typography className={`${classes.titleInfor}`}>
          Thay đổi mật khẩu
          <Typography className={classes.subTitlleInfor}>(Bỏ trống nếu không thay đổi)</Typography>
        </Typography>
        <InputField
          size="small"
          placeholder="Mật khẩu hiện tại"
          error={Boolean(errors.password)}
          inputProps={{
            name: 'oldPassword',
            maxLength: 20,
            type: currentVisiblePw ? 'text' : 'password',
            ...register('oldPassword', {}),
          }}
          endAdornment={
            currentVisiblePw ? (
              <VisibilityIcon
                className={`${classes.ico} ${classes.visiblePw}`}
                onClick={() => setCurrentVisiblePw(false)}
              />
            ) : (
              <VisibilityOffIcon
                className={classes.ico}
                onClick={() => setCurrentVisiblePw(true)}
              />
            )
          }
          errorMessage={errors.oldPassword?.message}
        />
        <InputField
          size="small"
          placeholder="Mật khẩu mới"
          error={Boolean(errors.password)}
          inputProps={{
            name: 'password',
            maxLength: 20,
            type: newVisiblePw ? 'text' : 'password',
            ...register('password', {
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
            newVisiblePw ? (
              <VisibilityIcon
                className={`${classes.ico} ${classes.visiblePw}`}
                onClick={() => setNewVisiblePw(false)}
              />
            ) : (
              <VisibilityOffIcon className={classes.ico} onClick={() => setNewVisiblePw(true)} />
            )
          }
          errorMessage={errors.password?.message}
        />
        <InputField
          size="small"
          placeholder="Nhập lại mật khẩu mới"
          error={Boolean(errors.password)}
          inputProps={{
            name: 'reNewPassword',
            maxLength: 20,
            type: reNewVisiblePw ? 'text' : 'password',
            ...register('reNewPassword', {
              validate: (value) =>
                value === watch('password') || 'Không khớp với password đã nhập ở trên',
            }),
          }}
          endAdornment={
            reNewVisiblePw ? (
              <VisibilityIcon
                className={`${classes.ico} ${classes.visiblePw}`}
                onClick={() => setReNewVisiblePw(false)}
              />
            ) : (
              <VisibilityOffIcon className={classes.ico} onClick={() => setReNewVisiblePw(true)} />
            )
          }
          errorMessage={errors.reNewPassword?.message}
        />
        <Button className={classes.btn} type="submit" fullWidth>
          Lưu thay đổi
        </Button>
      </form>
    </React.Fragment>
  );
}

Inforuser.propTypes = {};

export default Inforuser;
