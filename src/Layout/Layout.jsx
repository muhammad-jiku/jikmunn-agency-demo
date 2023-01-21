import React from 'react';

//  internal imports
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
