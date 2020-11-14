import React from 'react';
import { Row, Col } from 'antd';
import ListItems from './list-items';

const FeaturedProducts = () => {
  return (
    <>
      <Row style={{margin: '12px 0px'}}>
        <Col span={24}>
          <h2 style={{textAlign: 'center', margin: '8px 0px'}}>Featured Products</h2>
        </Col>
      </Row>
      <ListItems/>
    </>
  )
}
export default React.memo(FeaturedProducts);