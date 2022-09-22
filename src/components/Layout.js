import Navbar from './Navbar'
import Footer from './Footer'

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
