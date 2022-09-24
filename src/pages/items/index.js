import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
const products = [
  {
    id: 1,
    name: 'Yonex Astrox 100ZZ (Dark Navy)',
    price: '$289',
    href: '/items/astroxnavy',
    imageSrc:
      '/photos/astrox100zzdark.jpg',
    imageAlt: '.',
  },
  {
    id: 2,
    name: 'Yonex Astrox 100ZZ (Kurenai)',
    price: '$289',
    href: '/items/astroxred',
    imageSrc:
      '/photos/astrox100zzred.jpg',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Yonex Astrox 88D Pro',
    price: '$279',
    href: '/items/astrox88DPro',
    imageSrc:
      '/photos/Astrox88DPro.jpg',
    imageAlt: '.',
  },
  {
    id: 4,
    name: 'Yonex Astrox 99 Pro (White Tiger)',
    price: '$269',
    href: '/items/astrox99Pro',
    imageSrc:
      '/photos/Astrox99Pro.jpg',
    imageAlt: '.',
  },
  {
    id: 5,
    name: 'Yonex Astrox 88S Pro ',
    price: '$259',
    href: '/items/astrox88SPro',
    imageSrc:
      '/photos/Astrox88SPro.jpg',
    imageAlt: '.',
  },
  {
    id: 6,
    name: 'Yonex Duora 6 (Shine Pink)',
    price: '$209',
    href: '/items/duora6',
    imageSrc:
      '/photos/Duora6Pink.jpg',
    imageAlt: '.',
  },
  {
    id: 7,
    name: 'Yonex Arcsaber 11',
    price: '$199',
    href: '/items/Arcsaber11',
    imageSrc:
      '/photos/Arcsaber11.jpg',
    imageAlt: '.',
  },
]

export default function Example() {
  return (
    <div>
      <Head>
        <title>Items</title>
        <meta
        name="description"
        content="Here you can get acquainted with different models of rackets and choose the right one for you. Also we have a post how to choose a badminton racket."
      />
       <meta property="og:title" content="WebBadminton Items" />
      <meta
        property="og:description"
        content="Here you can get acquainted with different models of rackets and choose the right one for you. Also we have a post how to choose a badminton racket."
      />
      <meta property="og:url" content="https://webbadminton.com/items" />
      <meta property="og:type" content="article" />
      <meta property="og:image" content="/photos/mainstore.jpg" /> 
      </Head>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="mt-2 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Items
          </h1>
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <Link href="/">
              <div className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Return Home<span aria-hidden="true"> &rarr;</span>
              </div>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="sm:aspect-w-2 sm:aspect-h-3 h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:h-auto">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <Link href={product.href}>{product.name}</Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/">
              <div className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Return Home<span aria-hidden="true"> &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
