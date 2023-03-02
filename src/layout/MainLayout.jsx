import React, { useState } from 'react';
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

// <SimpleBarReact style={{ minHeight: '100vh' }}>
//   {MailList.map(({ id, name, email }) => (
//     <span style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
//       <div key={id}>{id}</div>
//       <div key={email}>{email}</div>
//       <div key={name}>{name}</div>
//     </span>
//   ))}
// </SimpleBarReact>;
