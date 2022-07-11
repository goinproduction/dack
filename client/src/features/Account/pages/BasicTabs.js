import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { FETCH_ORDER_PRODUCT } from 'app/saga/auth/actionType';
import Page from 'components/common/Page';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OderPlaced from './orderPlaced';
import Header from 'components/common/Header';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  const { order } = useSelector((state) => state.user);

  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    try {
      dispatch({ type: FETCH_ORDER_PRODUCT, userId: userData.userId });
    } catch (e) {}
  }, []);

  return (
    <Page
      title="Danh sách đơn hàng"
      header={<Header headerMobile="onlyTitle" titleMobile="Danh sách đơn hàng" />}
    >
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white', marginTop: '-24px' }}
          style={{ overflow: 'scroll !important' }}
          mb={4}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Đang lấy hàng" {...a11yProps(0)} />
            <Tab label="Đã nhập kho" {...a11yProps(1)} />
            <Tab label="Đang giao hàng" {...a11yProps(2)} />
            <Tab label="Giao hàng thành công" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel className="tab" value={value} index={0}>
          <OderPlaced data={order?.filter((item) => item.order_status === 'Đang lấy hàng')} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OderPlaced data={order?.filter((item) => item.order_status === 'Đã nhập kho')} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <OderPlaced data={order?.filter((item) => item.order_status === 'Đang giao hàng')} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <OderPlaced
            data={order?.filter((item) => item.order_status === 'Giao hàng thành công')}
          />
        </TabPanel>
      </Box>
    </Page>
  );
}
