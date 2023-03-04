import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Script } from 'gatsby';
import icon from '../../images/favicon.svg';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <FloatingWhatsApp
        phoneNumber="00 000 00 00"
        accountName={'Grafixy'}
        avatar={icon}
      />

      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
