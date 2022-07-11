import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select, { components } from 'react-select';
import Result from './Result';
import Axios from 'axios';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <SearchIcon />
    </components.DropdownIndicator>
  );
};

function SearchBar({ sx }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [messeageNotFound, setMesseageNotFound] = useState('');

  let navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.trim().length >= 3) {
      setLoading(true);
      setMesseageNotFound('Đang tìm kiếm sản phẩm');

      const delay = setTimeout(() => {
        setRequestCount((x) => x + 1);
      }, 750);

      return () => {
        clearTimeout(delay);
      };
    } else {
      setLoading(false);
      setMesseageNotFound('Phải nhập ít nhất 3 kí tự');
    }
  }, [searchTerm]);

  useEffect(() => {
    if (requestCount > 0) {
      const ourRequest = Axios.CancelToken.source();
      async function sendRequest() {
        try {
          const res = await productApi.searchProduct(searchTerm, {
            cancelToken: ourRequest.token,
          });
          if (res) {
            setResults(res.productLst);
            setLoading(false);
            setMesseageNotFound('Không tìm thấy sản phẩm :(');
          }
        } catch (e) {
          setLoading(false);
          setMesseageNotFound('Không tìm thấy sản phẩm :(');
          console.log('There was a problem or the request was cancelled', e);
        }
      }
      sendRequest();
      return () => {
        ourRequest.cancel();
      };
    }
  }, [requestCount]);

  const handleInputChange = (value) => {
    setSearchTerm(value);
  };

  const handleOnChange = (value) => {
    navigate(`/product/${value._id}`);
  };

  const handleMenuOpen = () => {
    if (results.length > 0) return;
    setLoading(true);
  };

  useEffect(() => {
    if (!isLoading) return;

    (async () => {
      try {
        const res = await productApi.getAll(1, 5);
        setResults(res.productLst);
        setLoading(false);
      } catch (error) {
        console.log('Fetch Result Error ', error);
      }
    })();
  }, [isLoading]);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', md: '400px' },
        height: (theme) => theme.spacing(5),
        borderRadius: 1,
        ...sx,
        '& > div': {
          width: '100%',
        },
      }}
    >
      <Select
        value=""
        inputValue={searchTerm}
        onInputChange={handleInputChange}
        options={results}
        onChange={handleOnChange}
        onMenuOpen={handleMenuOpen}
        placeholder="Tìm kiếm sản phẩm"
        isLoading={isLoading}
        loadingMessage={() => 'Đang tìm kiếm sản phẩm'}
        noOptionsMessage={() => messeageNotFound}
        getOptionValue={(product) => product.name}
        getOptionLabel={(product) => <Result product={product} />}
        components={{ DropdownIndicator }}
      />
    </Box>
  );
}

export default SearchBar;
