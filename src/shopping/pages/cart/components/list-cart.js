import React from 'react';
import { Row, Col, Image, InputNumber, Button } from 'antd';

const ListItemsCart = () => {
  return (
    <>
      <Row style={{ margin: '25px 0px' }}>
        <Col span={24}>
          <h1 style={{textAlign: 'center'}}> List items cart</h1>
        </Col>
      </Row>
      <Row style={{marginBottom: '20px', borderBottom: '1px solid #ccc', padding: '10px 0px'}}>
        <Col span={4} >
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={20}>
          <h2> Iphone 11 pro max 128</h2>
          <p>Price: 32000000</p>
          <p>Money: 64000000</p>
          <InputNumber min={1} max={10} defaultValue={2} onChange="" />
          <p>
            <Button type="dashed"> Remove</Button>
          </p>
        </Col>
      </Row>
      <Row style={{ margin: '10px 0px' }}>
        <Col span={24}>
          <h3 style={{ textAlign:'right' }}> Tong tien: 11212212</h3>
        </Col>
      </Row>
    </>
  )
}
export default React.memo(ListItemsCart);