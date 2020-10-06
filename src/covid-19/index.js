import React from 'react';
import LayoutComponent from './components/partials/Layout';
import Global from './components/Global';

class Corona extends React.Component {
  render() {
    return(
      <LayoutComponent>
        <Global/>
      </LayoutComponent>
    );
  }
}
export default Corona;