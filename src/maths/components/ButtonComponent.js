import React from 'react';

export default class ButtonComponent extends React.Component {
  render() {
    return(
      <>
        <button onClick={this.props.btnClick} type={this.props.type}>{this.props.children}</button>
      </>
    );
  }
}
