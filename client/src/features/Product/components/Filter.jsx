import { 
  Typography, 
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  List,
  ListItemButton,
  ListItem,
  Menu,
  } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import categoryAPI from '../../../api/categoryApi'

function Filter( {anchorEl, open, handleClose, getFilter}) {

  const [categoryList, setCategoryList] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [categoryID, setCategoryID] = React.useState('');

  const fetchCategory = async() => {
    try {
      const response = await categoryAPI.getAll();
      setCategoryList(response?.categories)
    } catch (e) {
      console.log(e);
    }
  }  

  const handleListItemClick = (event, index, categoryID) => {
    setSelectedIndex(index);
    getFilter(categoryID);
  };

  React.useEffect(() => {
    fetchCategory()
  }, [])

  return (
    <Menu 
      id='filter-button' 
      anchorEl={anchorEl} 
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      anchorPosition={{
        top: '5rem',
        left: 0
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}>
      <Box sx={{height: '70vh', overflowY: 'scroll'}}>
        <Typography 
          sx={{display: 'flex', 
          height: '3rem', 
          fontWeight: 500,
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#47ABFF', 
          color: '#fff'}}>
          LỌC SẢN PHẨM
        </Typography>
        <Box>
          <Typography sx={{pt: '1rem', pl: '1rem', fontWeight: 500 }}>
            DANH MỤC SẢN PHẨM
          </Typography>
          <List sx={{pt: '0px'}}>
            <ListItemButton 
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0, 'all')}>
              <ListItem> 
                Tất cả
              </ListItem>
            </ListItemButton>
            {categoryList?.map((category, index) => (
              <ListItemButton key={category._id}
                selected={selectedIndex === index+1}
                onClick={(event) => handleListItemClick(event, index+1, category._id)}>
                <ListItem > 
                  {category.title}
                </ListItem>
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Box>
          <Typography sx={{pt: '1rem', pl: '1rem', fontWeight: 500 }}>
            KHUYẾN MÃI
            </Typography>
          <FormGroup sx={{pl: '1rem'}}>
            <FormControlLabel control={<Checkbox/>} label="Khuyến mãi" />
          </FormGroup>
        </Box>
        {/* <Box>
          <Typography sx={{pt: '1rem', pl: '1rem', fontWeight: 500}}>
            THƯƠNG HIỆU
          </Typography>
          <FormGroup sx={{pl: '1rem'}}>
            <FormControlLabel control={<Checkbox/>} label="Fasvin" />
            <FormControlLabel control={<Checkbox/>} label="Foxconn" />
            <FormControlLabel control={<Checkbox/>} label="Sony" />
            <FormControlLabel control={<Checkbox/>} label="BaoBao" />
            <FormControlLabel control={<Checkbox/>} label="ATC" />
            <FormControlLabel control={<Checkbox/>} label="Choseal" />
            <FormControlLabel control={<Checkbox/>} label="LG" />
            <FormControlLabel control={<Checkbox/>} label="Microsoft" />
            <FormControlLabel control={<Checkbox/>} label="Canon" />
            <FormControlLabel control={<Checkbox/>} label="VERSACE" />
            <FormControlLabel control={<Checkbox/>} label="DRMT" />
            <FormControlLabel control={<Checkbox/>} label="Xiaomi" /> 
            <FormControlLabel control={<Checkbox/>} label="Khác" />
          </FormGroup>
        </Box> */}
      </Box>
    </Menu>
  );
}

export default Filter;