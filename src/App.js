import React from 'react';
import Layout from '../Components/Layout';
import Start from '../Phases/Start';
import Transform from '../Phases/Transform';
import Excel from '../Phases/Excel';
import Professionalize from '../Phases/Professionalize';
import Success from '../Phases/Success';

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
