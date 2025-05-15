import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/layout.css';



export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout--main">{children}</main>
      <Footer />
    </div>
  );
}
