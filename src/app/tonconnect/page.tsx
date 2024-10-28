'use client'

import { TonConnectButton, TonConnectUIProvider, useTonWallet, useTonConnectUI } from '@tonconnect/ui-react'
import { useState, useEffect } from 'react'
// Telegram Mini App SDK
import WebApp from '@twa-dev/sdk';

// Hide the main button
WebApp.MainButton.hide();
// Expand the Telegram Mini App to full screen
WebApp.expand();
// Initialize the Telegram Mini App SDK
WebApp.ready();
// Enable the closing confirmation
WebApp.enableClosingConfirmation();

function WalletInfo() {
  const wallet = useTonWallet()
  const [tonConnectUI] = useTonConnectUI()
  const [balance, setBalance] = useState<string | null>(null)

  useEffect(() => {
    if (wallet) {
      tonConnectUI.getWallets().then((info) => {
        // if (info?.balance) {
        //   setBalance(info.balance.toString())
        // }
        console.log(info)
      })
    } else {
      setBalance(null)
    }
  }, [wallet, tonConnectUI])

  if (!wallet) {
    return null
  }

  return (
    <div className="mt-4 p-4 bg-white rounded shadow">
      <p>Address: {wallet.account.address}</p>
      <p>Balance: {balance ? `${balance} nanoTON` : 'Loading...'}</p>
    </div>
  )
}

export default function TonConnectAdvanced() {
  return (
    <TonConnectUIProvider manifestUrl="https://gray-used-skunk-826.mypinata.cloud/ipfs/QmYDaBpnyhzn37HPXnjfgGfYaXLSdcT3HsLFZTpZN9YkWK">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Connect to TON Wallet</h1>
        <TonConnectButton />
        <WalletInfo />
      </div>
    </TonConnectUIProvider>
  )
}