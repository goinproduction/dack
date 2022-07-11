import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    border: '1px grey solid',
    borderRadius: '3px',
    marginBottom: '10px',
    marginTop: '10px',

    // input
    '& .MuiInputBase-root': {
      '& ::placeholder': {
        fontSize: '0.9rem',
        fontWeight: '100',
      },
      '& .MuiInputBase-input': {
        backgroundColor: 'white',
        padding: '10px',
      },
    },
    '& .MuiFilledInput-root': {
      backgroundColor: 'white',
      '& .MuiFilledInput-input': {
        padding: '10px',
      },
    },
    '& .MuiFilledInput-inputMarginDense': {
      paddingTop: '13px',
    },
  },
  // selectField:{
  //   padding:'10px',
  // },
  // '.MuiOutlinedInput-input':{
  //   padding:'10px !important',
  // },
  // optionItem:{
  //   // margin:'-10px',
  // }
}));
