import React from 'react';
import { Row, Col, Card } from 'antd';

const Global = () => {
  return(
    <Row>
      <Col span={8}>
        <Card title="Nhiem benh" bordered={true}>
          <p>- Moi nhiem : 12123</p>
          <p>- Tong ca nhiem : 12123</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Tu vong" bordered={true}>
          <p>- Moi tu vong : 12123</p>
          <p>- Tong ca tu vong : 12123</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Khoi benh" bordered={true}>
          <p>- Moi khoi : 12123</p>
          <p>- Tong ca khoi : 12123</p>
        </Card>
      </Col>
    </Row>
  )
}
export default Global;