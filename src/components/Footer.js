import { Container } from './Container'

const Footer = () => {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; 2022 WebBadminton. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
