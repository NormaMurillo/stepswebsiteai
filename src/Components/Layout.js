import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/layout.css';

const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <main className="layout__main">{children}</main>
    <Footer />
  </div>
);

export default Layout;
