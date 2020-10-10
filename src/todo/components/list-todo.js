import React from 'react';
import { Row, Col, List, Checkbox } from 'antd';

const ListTodo = () => {
  // du lieu mau
  const data = [
    {title: 'Hoc CSS'},
    {title: 'Hoc React'}
  ];
  return (
    <Row style={{padding: '20px', border: '1px solid #ccc', backgroundColor:'white'}}>
      <Col span={24}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Checkbox></Checkbox>}
                title={item.title}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}
export default React.memo(ListTodo);