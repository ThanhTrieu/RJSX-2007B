import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Result from './components/Result';

class TotalNumber extends React.Component {

  sumNumber = () => {

  }

  render() {
    return (
      <>
        <Input value={0}/>
        <br/>
        <Input value={0} />
        <br/>
        <Button click={this.sumNumber} type="button"> Tong </Button>
        <Result total={0} />
      </>
    )
  }
}
export default TotalNumber;