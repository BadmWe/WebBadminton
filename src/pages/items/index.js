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
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Astrox-100-ZZ-600x600.jpg',
    imageAlt: '.',
  },
  {
    id: 2,
    name: 'Yonex Astrox 100ZZ (Kurenai)',
    price: '$289',
    href: '/items/astroxred',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Astrox-100-ZZ-Kurenai-600x600.jpg',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Yonex Astrox 88D Pro',
    price: '$279',
    href: '/items/astrox88DPro',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Astrox-88D-Pro-600x600.jpg',
    imageAlt: '.',
  },
  {
    id: 4,
    name: 'Yonex Astrox 99 Pro (White Tiger)',
    price: '$269',
    href: '/items/astrox99Pro',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Astrox-99-Pro-White-600x600.jpg',
    imageAlt: '.',
  },
  {
    id: 5,
    name: 'Yonex Astrox 88S Pro ',
    price: '$259',
    href: '/items/astrox88SPro',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Astrox-88S-Pro-600x600.jpg',
    imageAlt: '.',
  },
  {
    id: 6,
    name: 'Yonex Duora 6 (Shine Pink)',
    price: '$209',
    href: '/items/duora6',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Duora-6-Pink-600x600.jpg',
    imageAlt: '.',
  },
  {
    id: 7,
    name: 'Yonex Arcsaber 11',
    price: '$199',
    href: '/items/Arcsaber11',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Arcsaber-11-600x600.jpg',
    imageAlt: '.',
  },
]

export default function Example() {
  return (
    <div>
    <Head>
      <title>Items</title>
      {/*
      <meta
        name="description"
        content="A platform where we talk about the rules of badminton, brands, equipment and much more."
      />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="WebBadminton" />
      <meta
        property="og:description"
        content="A platform where we talk about the rules of badminton, brands, equipment and much more."
      />
      <meta property="og:url" content="https://webbadminton.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/backgound.jpg" />
      */}
    </Head>
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">Items</h1>
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
                <Link href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Return Home<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}
