'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'

export function Header() {
  return (
    <header className="flex justify-end bg-gray-900 p-4">
      <ConnectButton />
    </header>
  )
}
