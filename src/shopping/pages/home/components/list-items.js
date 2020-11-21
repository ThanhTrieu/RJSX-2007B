import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Card, Button, Skeleton } from 'antd';
import * as actions from '../../cart/actions/index';

const { Meta } = Card;
const ListItems = (props) => {
  const dispatch = useDispatch();

  const addCart = (id) => {
    dispatch(actions.addPdToCart(id));
  }

  if(props.loading){
    return (
      <Skeleton active />
    )
  }

  return (
    <>
    <Row style={{margin: '10px 0px'}}>
    { props.data.length > 0 ? props.data.map((item, index) => (
      <Col span={6} key={index}>
        <Card
          hoverable
          bordered={false}
          style={{ width: 300 }}
          cover={<img alt={item.name} src={item.image} />}
        >
          <Meta title={item.name} />
          <p>Price : {item.price}</p>
          <Button
            type="primary"
            onClick={() => addCart(item.id)}
          >Add cart</Button>
        </Card>
      </Col>
    )) : null }
    </Row>
    </>
  )
}
export default React.memo(ListItems);