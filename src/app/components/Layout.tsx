'use client'

import { TonConnectUIProvider } from "@tonconnect/ui-react"

import React, { ReactNode } from 'react';

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