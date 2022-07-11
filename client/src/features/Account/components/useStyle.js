import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    background: 'white',
    height: '45px',
    padding: '10px',
    color: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecorationLine: 'none',
    '& :hover': {
      cursor: 'pointer',
    },
  },
  icon: {
    marginRight: '20px',
  },
  p20: {
    // padding:'10px'
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5px',
    // paddingLeft:'0px !important' ,
  },
  //update address
  pt0: {
    paddingTop: '0px !important',
    paddingLeft: '0px !important',
  },
  pl5: {
    paddingLeft: '5px !important',
  },
  pr5: {
    paddingRight: '5px !important',
  },
  formAddress: {
    padding: '10px',
    backgroundColor: 'white',
    marginTop: '10px',
  },
  //save address
  boxSaveAddress: {
    padding: '10px',
    backgroundColor: 'white',
  },
  textAddress: {
    color: 'grey',
    fontSize: '16px',
  },
  //information user
  titleInfor: {
    fontWeight: '700',
    fontSize: '15px',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '15px',
    marginBottom: '5px',
  },
  subTitlleInfor: {
    fontWeight: '400',
    color: 'grey',
    fontSize: '14px',
    marginLeft: '5px',
  },
  btn: {
    marginTop: '20px',
    width: '100%',
    backgroundColor: '#FF4500',
    borderRadius: 3,
    height: 45,
    color: 'white',
    '&:hover': {
      backgroundColor: '#FF6000',
    },
    '& > .makeStyles-icon-2': {
      marginRight: '0px',
    },
  },
  //CardProduct
  cardProduct: {
    marginTop: '5px',
    marginBottom: '5px',
    padding: '10px',
    display: 'flex',
    '& > img': {
      width: '20% !important',
      padding: '5px',
      border: '1px #D8D8D8 solid',
      height: '100%',
    },
    '& > div': {
      marginLeft: '10px',
      width: '100%',
    },
    '& > div > div': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '5px',
      '& > p': {
        marginBottom: '5px',
        fontSize: '12px',
      },
    },
  },
  title: {
    fontWeight: '500',
    marginBottom: '5px',
    fontSize: '16px',
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    textOverFlow: 'ellipsis',
  },
  price: {
    textAlign: 'end',
    fontWeight: '500',
    fontSize: '14px',
  },
  //order
  order: {
    backgroundColor: 'white',
    marginTop: '20px',
    marginBottom: '20px',
    '& > div ': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px',
      '& > p': {
        fontSize: '14px',
      },
    },
  },
  //oderDelivery
  orderDelivery: {
    backgroundColor: 'white',
    marginTop: '20px',
    marginBottom: '20px',
    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'grey',
      padding: '5px',
      paddingLeft: '10px',
      paddingRight: '10px',
      '& > p': {
        fontSize: '14px',
      },
    },
  },
  [theme.breakpoints.up('sm')]: {
    //CardProduct
    cardProduct: {
      padding: '30px',
      '& > img': {
        width: '15% !important',
      },
      '& > div ': {
        padding: '30px',
      },
      '& > div > div': {
        marginBottom: '10px',
        '& > p': {
          marginBottom: '10px',
          fontSize: '15px',
        },
      },
    },
    title: {
      marginBottom: '10px',
      fontSize: '20px',
      WebkitLineClamp: 2,
    },
    price: {
      marginTop: '10px',
      fontSize: '20px',
    },
    //order
    order: {
      marginTop: '20px',
      marginBottom: '20px',
      '& > div ': {
        padding: '10px',
        '& > p': {
          fontSize: '22px',
        },
      },
    },
    //oderDelivery
    orderDelivery: {
      '& > div': {
        padding: '10px',
        paddingLeft: '30px',
        paddingRight: '30px',
        '& > p': {
          fontSize: '22px',
        },
      },
    },
  },
}));
