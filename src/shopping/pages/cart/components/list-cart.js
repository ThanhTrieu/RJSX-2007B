import React from 'react';
import { Row, Col, Image, InputNumber, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import * as reselect from '../reselect/cart-reselect';
import { createStructuredSelector } from 'reselect';
import * as actions from '../actions/index';

const ListItemsCart = () => {
  const {dataCart, totalMoney} = useSelector(createStructuredSelector({
    dataCart: reselect.getDataCart,
    totalMoney: reselect.getTotalMoney
  }));
  const dispatch = useDispatch();

  const removeItemCart = (id) => {
    dispatch(actions.deleteItemCart(id));
  }

  return (
    <>
      <Row style={{ margin: '25px 0px' }}>
        <Col span={24}>
          <h1 style={{textAlign: 'center'}}> List items cart</h1>
        </Col>
      </Row>

      {dataCart.length > 0 ? dataCart.map((item, index) => (
        <Row style={{marginBottom: '20px', borderBottom: '1px solid #ccc', padding: '10px 0px'}} key={index}>
          <Col span={4} >
            <Image
              width={200}
              src={item.image}
            />
          </Col>
          <Col span={20}>
            <h2> {item.name}</h2>
            <p>Price: {item.price}</p>
            <p>Money: {item.price * item.qty}</p>
            <InputNumber min={1} max={10} defaultValue={item.qty} onChange="" />
            <p>
              <Button
                type="dashed"
                onClick={() => removeItemCart(item.id)}
              > Remove</Button>
            </p>
          </Col>
        </Row>
      )) : null}
      <Row style={{ margin: '10px 0px' }}>
        <Col span={24}>
          <h3 style={{ textAlign:'right' }}> Tong tien: {totalMoney}</h3>
        </Col>
      </Row>
    </>
  )
}
export default React.memo(ListItemsCart);