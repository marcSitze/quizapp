import React from 'react';

import Header from '../../components/LandingPage/Header';
import Title from '../../components/LandingPage/Title';
import PanelWrapper from '../../components/LandingPage/Panel/PanelWrapper';
import Panel from '../../components/LandingPage/Panel';
import Footer from '../../components/LandingPage/Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Title>OSEZ LA RIGUEUR</Title>

      <PanelWrapper>
        <Panel />
      </PanelWrapper>
      <Footer />
    </>
  );
}
