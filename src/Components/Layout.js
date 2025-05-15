import React from 'react';
import Navbar from '../components/Navbar';
import Footer  from '../components/Footer';
import '../styles/layout.css';



export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout--main">{children}</main>
      <Footer />
    </div>
  );
}
