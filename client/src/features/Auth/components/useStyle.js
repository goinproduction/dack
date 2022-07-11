import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  p20: {
    padding: '20px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '500',
  },
  icon: {
    cursor: 'pointer',
  },
  subTitle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    '& > a': {
      color: '#FF4500',
      marginLeft: '3px',
      cursor: 'pointer',
      textDecorationLine: 'none',
    },
  },
  btn: {
    marginTop: '20px',
    width: '100%',
    backgroundColor: '#FF4500 !important',
    borderRadius: 3,
    height: 45,
    color: 'white !important',
    '&:hover': {
      backgroundColor: '#FF6000',
    },
  },
}));
