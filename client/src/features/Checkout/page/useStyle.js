import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mt18: {
    marginTop: '-18px',
  },
  //AddressDelivery
  show: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
  //Account
  boxAvatar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '60px',
  },
  avatar: {
    width: '100px',
    height: '100px',
  },
  p10: {
    padding: '10px',
  },
  //inforOrder
  inforOrder: {
    backgroundColor: 'white',
    marginBottom: '20px',
    paddingBottom: '10px',
    '& > p': {
      fontWeight: '500',
      padding: '10px',
      fontSize: '14px',
      marginBottom: '5px',
    },
    '& > div > p': {
      color: 'grey',
      padding: '10px',
      fontSize: '13px',
      paddingBottom: '0px',
    },
    '& > div > div': {
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: '10px',
      paddingRight: '10px',
      marginBottom: '15px',
      marginTop: '16px',
      '& > p': {
        fontSize: '14px',
      },
    },
  },
  [theme.breakpoints.up('sm')]: {
    //inforOrder
    inforOrder: {
      padding: '20px',
      '& > p': {
        fontSize: '22px',
      },
      '& > div > p': {
        fontSize: '20px',
      },
      '& > div > div': {
        '& > p': {
          fontSize: '22px',
        },
      },
    },
  },
}));
