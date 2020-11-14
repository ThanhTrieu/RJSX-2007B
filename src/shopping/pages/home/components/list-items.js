import React from 'react';
import { Row, Col, Card, Button } from 'antd';

const { Meta } = Card;
const ListItems = () => {
  return (
    <>
      <Row style={{margin: '10px 0px'}}>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat"/>
            <p>Price : 100000</p>
            <Button type="primary">Add cart</Button>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default React.memo(ListItems);