import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -bottom-14 overflow-hidden bg-indigo-50">
        <div className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]">
          <Image
            src={backgroundImage}
            alt=""
            layout="fixed"
            width={918}
            height={1495}
            priority
            unoptimized
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">DeceptiConf - </span> WebBadminton
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              WebBadminton is a platform where we talk about the rules of the
              game, brands, equipment and much more.
            </p>
            <p>
              Our content is suitable and will be interesting not only for
              begginers,but also for professional players as well.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
