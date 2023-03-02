import React from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
import Header from '../components/Header';
import Content from '../components/Content';
const MainLayout = () => {
  return (
    <SimpleBar autoHide={true} style={{ height: '100vh' }}>
      <Header />
      <Content />
    </SimpleBar>
  );
};

export default MainLayout;
