import React from 'react';
import Layout from '../components/Layout';
import Start from '../phases/Start';
import Transform from '../phases/Transform';
import Excel from '../phases/Excel';
import Professionalize from '../phases/Professionalize';
import Success from '../phases/Success';

export default function App() {
  return (
    <Layout>
      <Start />           {/* Fase S: Start :contentReference[oaicite:2]{index=2} */}
      <Transform />       {/* Fase T: Transform */}
      <Excel />           {/* Fase E: Excel */}
      <Professionalize /> {/* Fase P: Professionalize */}
      <Success />         {/* Fase S: Success */}
    </Layout>
  );
}
