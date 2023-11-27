import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { TempleWallet } from "@temple-wallet/dapp";

const Header = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connect = async () => {
      try {
          const available = await TempleWallet.isAvailable();
          if (!available) {
              throw new Error("Temple Wallet not installed");
          }

          const wallet = new TempleWallet("My Super DApp");
          await wallet.connect("mainnet");
          const tezos = wallet.toTezos();

          const accountPkh = await tezos.wallet.pkh();
          const accountBalance = await tezos.tz.getBalance(accountPkh);
          console.info(`address: ${accountPkh}, balance: ${accountBalance}`);

          setWalletConnected(true);
          setWalletAddress(accountPkh);
      } catch (err) {
          console.error(err);
      }
  };

  const disconnect = () => {
      setWalletConnected(false);
      setWalletAddress('');
      // Perform any additional cleanup or state resets here if needed
  };

  const truncateAddress = (address) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div style={{ backgroundColor: 'black', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="logo.png" alt="logo" style={{ width: '50px', marginRight: '10px' }} />
        <h1 style={{ color: 'white', fontSize: '1.5em', margin: 0 }}>PREMIERE DAPP</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {walletConnected && (
          <>
            <div style={{ color: 'white', marginRight: '10px' }}>
              {truncateAddress(walletAddress)}
            </div>
            <Button auto flat color="error" onClick={disconnect}>
              Disconnect Wallet
            </Button>
          </>
        )}
        {!walletConnected && (
          <Button auto flat color="success" onClick={connect}>
            Connect Wallet
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
