import React, { useState, useContext } from 'react';
import { Button, Input } from '@nextui-org/react';
import { WalletContext } from './WalletProvider'; 

const Transac = () => {
  const [receiverAddress, setReceiverAddress] = useState('');
  const [amount, setAmount] = useState('');
  const { walletAddress } = useContext(WalletContext);

  const handleSend = async () => {
    if (!walletAddress) {
      alert("Veuillez d'abord connecter un portefeuille.");
      return;
    }

   
    console.log(`Envoi de ${amount} ETH à ${receiverAddress} depuis ${walletAddress}`);
    
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Envoyer des ETH</h2>
      <Input 
        clearable 
        bordered 
        label="Adresse du destinataire" 
        placeholder="Entrez l'adresse ETH" 
        value={receiverAddress}
        onChange={(e) => setReceiverAddress(e.target.value)}
      />
      <Input 
        clearable 
        bordered 
        label="Montant à envoyer (ETH)" 
        placeholder="Entrez le montant" 
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button auto color="primary" onClick={handleSend}>
        Envoyer
      </Button>
    </div>
  );
};

export default Transac;
