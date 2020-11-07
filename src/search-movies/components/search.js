import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Input } from 'antd';
import { searchMovie } from '../actions/index';

const { Search } = Input;
const SearchMovies = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  const changeInput = (event) => {
    const val = event.target.value;
    setKeyword(val);
  }

  const searchMovieByKeyword = (name) => {
    dispatch(searchMovie(name));
  }

  return(
    <>
      <Row style={{margin: '20px 0px',}}>
        <Col span={12} offset={6}>
          <Search
            placeholder="Enter movie ..."
            onSearch={val => searchMovieByKeyword(val)}
            enterButton
            onChange={changeInput}
            value={keyword}
          />
        </Col>
      </Row>
    </>
  )
}
export default React.memo(SearchMovies);