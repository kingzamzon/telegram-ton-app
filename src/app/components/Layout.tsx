'use client'

import { TonConnectUIProvider } from "@tonconnect/ui-react"

import React, { ReactNode } from 'react';

// Telegram Mini App SDK
import WebApp from '@twa-dev/sdk';

if (typeof window !== 'undefined') {
 // Hide the main button
 WebApp.MainButton.hide();
 // Expand the Telegram Mini App to full screen
 WebApp.expand();

 WebApp.BackButton.show();
 // Initialize the Telegram Mini App SDK
 WebApp.ready();
 // Enable the closing confirmation
 WebApp.enableClosingConfirmation();
}

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <TonConnectUIProvider manifestUrl="https://gray-used-skunk-826.mypinata.cloud/ipfs/QmYDaBpnyhzn37HPXnjfgGfYaXLSdcT3HsLFZTpZN9YkWK">
      {children}
    </TonConnectUIProvider>
  );
}

export default Layout;