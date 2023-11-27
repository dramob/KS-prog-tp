import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

import Header from './Header';
import Footer from './Footer';
import { WalletProvider } from './WalletProvider';
import KryptoPote from './Kryptopote';
import Transac from './transac';
function App() {
  return (
    <NextUIProvider>
       <WalletProvider>
      <>
        <Header />
        {/* Autres composants ou éléments de votre application */}

        <KryptoPote/>
        <Transac/>
        <Footer />
      </>
      </WalletProvider>
    </NextUIProvider>
  );
}

export default App;
