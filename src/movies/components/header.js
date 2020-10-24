import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

const { Header } = Layout;

const HeaderComponent = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <Header>
      <NavLink to="/">
        <div className="logo" />
      </NavLink>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathName}>
        <Menu.Item key="/home">
          <NavLink to="/home">Trang chu</NavLink> 
        </Menu.Item>
        <Menu.Item key="/up-coming">
          <NavLink to="/up-coming">Phim sap cong chieu</NavLink>
        </Menu.Item>
        <Menu.Item key="/search">
          <NavLink to="/search">Tim kiem phim</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  )
}
export default React.memo(HeaderComponent);