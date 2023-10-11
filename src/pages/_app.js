import 'focus-visible'
import '../styles/tailwind.css'
import '@rainbow-me/rainbowkit/styles.css'

import { Layout } from '../components/Layout'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

export default function App({ Component, pageProps }) {
  const LuksoL14Chain = {
    id: 22,
    name: 'L14',
    network: 'lukso',
    nativeCurrency: {
      decimals: 18,
      name: 'Lukso',
      symbol: 'LYXt',
    },
    rpcUrls: {
      default: 'https://rpc.l14.lukso.network',
    },
    blockExplorers: {
      default: {
        name: 'Explorer',
        url: 'https://blockscout.com/lukso/l14',
      },
    },
    testnet: true,
  }

  const EvmosChain = {
    id: 9000,
    name: 'EVMOS',
    network: 'evmos',
    rpcUrls: {
      default: 'https://eth.bd.evmos.dev:8545',
    },
    testnet: true,
  }

  const { chains, provider, webSocketProvider } = configureChains(
    [
      ...(process.env.NEXT_PUBLIC_DEV === 'true' ? [chain.hardhat] : []),
      chain.polygonMumbai,
      LuksoL14Chain,
      EvmosChain,
    ],
    [
      publicProvider(),
      jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id !== LuksoL14Chain.id && chain.id !== EvmosChain.id)
            return null
          return { http: chain.rpcUrls.default }
        },
      }),
    ]
  )

  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains,
  })

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  })

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
