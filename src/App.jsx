import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';

function App() {
  const [mnemonic, setMnemonic] = useState('');  
  const [wallet, setWalletInfo] = useState([]);

  const generateMemo = () => {
    const wallet = ethers.Wallet.createRandom();
    setMnemonic(wallet.mnemonic.phrase);
  };

  const addWallet = () => {
    const newWallet = ethers.Wallet.fromMnemonic(mnemonic);
    setWalletInfo([...wallet, newWallet]);
  };

  return (
    <div className='bg-black h-screen w-full flex justify-center items-center text-white'>
      <div className='border-2 mb-10 w-fit min-w-[700px] h-fit p-10 py-4 rounded-md border-gray-400 shadow-md shadow-gray-600'>
        <div className='items-center justify-center flex'>
          <h1 className="text-2xl text-t2 font-bold hover:drop-shadow-lg mb-10">Web-Wallet</h1>
        </div>

        <div className="relative mt-2 rounded-md shadow-sm">
          <button className="my-2 text-sm font-bold mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded" onClick={generateMemo}>Generate Mnemonic</button>
          <p className="block w-full min-w-[500px] rounded-md border-0 py-1.5 pl-7 font-bold pr-20 text-sm text-slate-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-2 hover:ring-inset hover:ring-cyan-600 sm:text-sm sm:leading-6">{mnemonic}</p>
        </div>

        <div className="relative mt-2 rounded-md shadow-sm">
          <button className="my-2 text-sm font-bold mx-auto text-white bg-pink-600 border-0 py-2 px-8 focus:outline-none hover:bg-pink-700 rounded" onClick={addWallet}>Add Wallet</button>
          {wallet.map((wallet, index) => (
            <p key={index} className="block w-full min-w-[500px] rounded-md border-0 py-1.5 pl-7 font-bold pr-20 text-sm text-slate-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-2 hover:ring-inset hover:ring-cyan-600 sm:text-sm sm:leading-6">
              Wallet {index + 1}: {wallet.address}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;