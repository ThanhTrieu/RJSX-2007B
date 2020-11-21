import React from 'react';
import { Row, Col } from 'antd';
import ListItems from './list-items';
import * as reselect from '../reselect/product-reselect';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

const FeaturedProducts = () => {
  const { loading, featured } = useSelector(createStructuredSelector({
    loading: reselect.loadingSelector,
    featured: reselect.getFeaturedSelector
  }));

  return (
    <>
      <Row style={{margin: '12px 0px'}}>
        <Col span={24}>
          <h2 style={{textAlign: 'center', margin: '8px 0px'}}>Featured Products</h2>
        </Col>
      </Row>
      <ListItems
        loading={loading}
        data={featured}
      />
    </>
  )
}
export default React.memo(FeaturedProducts);