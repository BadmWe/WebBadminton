import 'focus-visible'
import '../styles/tailwind.css'
import { Layout } from '../components/Layout'
import { WagmiConfig, createClient, configureChains, chain } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
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

  const { chains, provider, webSocketProvider } = configureChains(
    [chain.polygonMumbai, LuksoL14Chain],
    [
      publicProvider(),
      jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id !== LuksoL14Chain.id) return null
          return { http: chain.rpcUrls.default }
        },
      }),
    ]
  )
  const client = createClient({
    autoConnect: true,
    connectors: [new MetaMaskConnector({ chains })],
    provider,
    webSocketProvider,
  })

  return (
    <WagmiConfig client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
  )
}
