import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { ethers } from 'ethers'
import { useAccount, useSigner, useNetwork } from 'wagmi'

import content from '../../frontaid.content.json'
import { getContractInfo } from '../../utils/contracts'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Page({ page, params }) {
  const [selectedColor, setSelectedColor] = useState(page.product.colors[0])

  const { address } = useAccount()
  const { chain } = useNetwork()
  const { data: signer } = useSigner()

  async function Mint() {
    const { contractAddress, abi } = getContractInfo(chain)

    const contract = new ethers.Contract(contractAddress, abi, signer)
    await contract['mint' + params.slug]({ from: address })
  }

  return (
    <div>
      <Head>
        <title>{page.product.name}</title>
        <meta
          name="description"
          content="Here you can get acquainted with different models of rackets and choose the right one for you. Also we have a post how to choose a badminton racket."
        />
        <meta property="og:title" content="WebBadminton Item" />
        <meta
          property="og:description"
          content="Here you can get acquainted with different models of rackets and choose the right one for you. Also we have a post how to choose a badminton racket."
        />
        <meta
          property="og:url"
          content={`https://webbadminton.com/items/${params.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/photos/itemsphoto.jpg" />
      </Head>
      <div className="bg-white">
        <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            {/* Product */}
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {page.product.images.map((image) => (
                      <Tab
                        key={image.id}
                        className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                      >
                        {({ selected }) => (
                          <>
                            <span className="sr-only">{image.name}</span>
                            <span className="absolute inset-0 overflow-hidden rounded-md">
                              <Image
                                src={image.src}
                                width={600}
                                height={600}
                                alt={page.product.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </span>
                            <span
                              className={classNames(
                                selected
                                  ? 'ring-indigo-500'
                                  : 'ring-transparent',
                                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>

                <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                  {page.product.images.map((image) => (
                    <Tab.Panel key={image.id}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={600}
                        className="h-full w-full object-cover object-center sm:rounded-lg"
                      />
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              {/* Product info */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {page.product.name}
                </h1>
                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl text-gray-900">{page.product.price}</p>
                </div>
                {/* Reviews */}
                <div className="mt-3">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            page.product.rating > rating
                              ? 'text-indigo-500'
                              : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">
                      {page.product.rating} out of 5 stars
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>

                  <div
                    className="space-y-6 text-base text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: page.product.description,
                    }}
                  />
                </div>

                <form className="mt-6">
                  {/* Colors */}
                  <div>
                    <h3 className="text-sm text-gray-600">Color: Camel Gold</h3>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-2"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {page.product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedColor,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring-2' : '',
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.bgColor,
                                'h-8 w-8 rounded-full border border-black border-opacity-10'
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="sm:flex-col1 mt-10 flex">
                    <button
                      type="button"
                      onClick={Mint}
                      className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                    >
                      Buy now
                    </button>
                  </div>
                </form>
                <section aria-labelledby="details-heading" className="mt-12">
                  <h2 id="details-heading" className="sr-only">
                    Additional details
                  </h2>

                  <div className="divide-y divide-gray-200 border-t">
                    {page.product.details.map((detail) => (
                      <Disclosure as="div" key={detail.name}>
                        {({ open }) => (
                          <>
                            <h3>
                              <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                <span
                                  className={classNames(
                                    open ? 'text-indigo-600' : 'text-gray-900',
                                    'text-sm font-medium'
                                  )}
                                >
                                  {detail.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusSmIcon
                                      className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusSmIcon
                                      className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel
                              as="div"
                              className="prose prose-sm pb-6"
                            >
                              <ul role="list">
                                {detail.items.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <section
              aria-labelledby="related-heading"
              className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
            >
              <h2
                id="related-heading"
                className="text-xl font-bold text-gray-900"
              >
                Similar Items
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {page.relatedProducts.map((product) => (
                  <div key={product.id}>
                    <div className="relative">
                      <div className="relative h-72 w-full overflow-hidden rounded-lg">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          width={600}
                          height={600}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="relative mt-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                        />
                        <p className="relative text-lg font-semibold text-white">
                          {product.price}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <a
                        href={product.href}
                        className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                      >
                        Explore now
                        <span className="sr-only">, {product.name}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = content.pages.map((page) => {
    const slug = page.path.split('/').slice(1)
    return { params: { slug } }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const currentPath = `/${params.slug.join('/')}`
  const page = content.pages.find((page) => page.path === currentPath) || {
    notfound: true,
  }
  return { props: { page, params } }
}
