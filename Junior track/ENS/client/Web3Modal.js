// npm install @coinbase/wallet-sdk..........for coinbase wallet connection

import React, { useState } from 'react'
import Web3Modal from '../Web3Modal'
import { ethers } from 'ethers'

const providerOptions= {
// Add coinbase or other wallet details as per their documentation
}


const App = () => {
  const [Web3Provider, setWeb3Provider] = useState(null);



  const connectWallet = async() => {
    try {
      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
      });
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      if(provider){
        setWeb3Provider(provider);
      }
      // const signer = provider.getSigner();

    } catch (error) {
      console.log(error) 
    }
  }

  return (
    <div>
         <h1>Web3Modal wallet connection</h1>

         { Web3Provider == null ? 
             (<button onClick={connectWallet}> Connect wallet </button> ) :
             (<div> 
              <p> Connected</p>
              <p>Address: {Web3Provider.provider.selectedAddress}</p>
             </div>)
         }
    </div>
  )
}

export default Web3Modal













