import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <>
      <input defaultValue={props.value} />
    </>
  );
}
Input.propTypes = {
  value: PropTypes.number
}
export default Input;
