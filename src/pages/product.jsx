/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Yonex Astrox 100ZZ (Dark Navy)',
    price: '$200',
    href: '#',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Astrox-100-ZZ-600x600.jpg',
    imageAlt: '.',
  },
  {
    id: 1,
    name: 'Yonex Astrox 100ZZ (Kurenai)',
    price: '$200',
    href: '#',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Astrox-100-ZZ-Kurenai-600x600.jpg',
    imageAlt: '.',
  },
  // More products...
  {
    id: 1,
    name: 'Yonex Astrox 88D Pro',
    price: '$200',
    href: '#',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Astrox-88D-Pro-600x600.jpg',
    imageAlt: '.',
  },
  {
    id: 1,
    name: 'Yonex Astrox 99 Pro (White Tiger)',
    price: '$200',
    href: '#',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Astrox-99-Pro-White-600x600.jpg',
    imageAlt: '.',
  },
  {
    id: 1,
    name: 'Yonex Astrox 88S Pro ',
    price: '$200',
    href: '#',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Astrox-88S-Pro-600x600.jpg',
    imageAlt: '.',
  },
  {
    id: 1,
    name: 'Yonex Duora 6 (Shine Pink)',
    price: '$200',
    href: '#',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Duora-6-Pink-600x600.jpg',
    imageAlt: '.',
  },
  {
    id: 1,
    name: 'Yonex Arcsaber 11',
    price: '$200',
    href: '#',
    imageSrc:
      'https://badm-store.ru/image/cache/catalog/products/raketki/yonex/Arcsaber-11-600x600.jpg',
    imageAlt: '.',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Our Favorites
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all favorites<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="sm:aspect-w-2 sm:aspect-h-3 h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:h-auto">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
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
            Browse all favorites<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
