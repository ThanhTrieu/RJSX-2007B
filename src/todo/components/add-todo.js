import React from 'react';
import {Row, Col, Input} from 'antd';

const { Search } = Input;

const AddTodo = () => {
  return(
    <Row style={{marginTop:'15px', marginBottom:'5px'}}>
      <Col span={24}>
        <Search
          placeholder="todo name ..."
          enterButton="Add"
          size="large"
          onSearch={value => console.log(value)}
        />
      </Col>
    </Row>
  );
}
export default React.memo(AddTodo);