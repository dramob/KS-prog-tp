import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

import Header from './Header';
import Footer from './Footer';
import { WalletProvider } from './WalletProvider';
import KryptoPote from './Kryptopote';
function App() {
  return (
    <NextUIProvider>
       <WalletProvider>
      <>
        <Header />
        {/* Autres composants ou éléments de votre application */}
      
        <KryptoPote/>
        <Footer />
      </>
      </WalletProvider>
    </NextUIProvider>
  );
}

export default App;
