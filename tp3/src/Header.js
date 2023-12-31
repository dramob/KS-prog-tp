import React, { useContext } from 'react';
import { Button } from '@nextui-org/react';
import { WalletContext } from './WalletProvider'; // Assurez-vous que le chemin d'importation est correct

const Header = () => {
  const { walletConnected, walletAddress, connectWallet, disconnectWallet } = useContext(WalletContext);

  // Fonction pour tronquer l'adresse du portefeuille
  const truncateAddress = (address) => address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : '';

  return (
    <div style={{ backgroundColor: 'black', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="logo.png" alt="logo" style={{ width: '50px', marginRight: '10px' }} />
        <h1 style={{ color: 'white', fontSize: '1.5em', margin: 0 }}>PREMIERE DAPP</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {walletConnected ? (
          <>
            <div style={{ color: 'white', marginRight: '10px' }}>
              {truncateAddress(walletAddress)}
            </div>
            <Button auto flat color="error" onClick={disconnectWallet}>
              Disconnect Wallet
            </Button>
          </>
        ) : (
          <Button auto flat color="success" onClick={connectWallet}>
            Connect Wallet
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
