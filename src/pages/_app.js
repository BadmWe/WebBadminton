import 'focus-visible'
import '@/styles/tailwind.css'
import { Layout } from '@/components/Layout'
import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
  chain,
} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

export default function App({ Component, pageProps }) {
  const { chains, provider, webSocketProvider } = configureChains(
    [chain.mainnet, chain.polygon],
    [publicProvider()]
  )
  const client = createClient({
    autoConnect: true,
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
