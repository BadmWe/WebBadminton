import { CameraIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";

export default function VictorPage() {
  return (
    <div>
      <Head>
        <title>
          WebBadminton Victor: sportswear and sports equipment company
        </title>
        <meta
          name="description"
          content="Yonex is a Japanese sports equipment manufacturing company.Yonex produces equipment and apparel for tennis, badminton, golf, and running."
        />
        <meta property="og:title" content="WebBadminton Victor" />
        <meta
          property="og:image"
          content="https://webbadminton.com/photos/monr.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webbadminton.com/victor" />
        <meta
          property="og:description"
          content="Yonex is a Japanese sports equipment manufacturing company.Yonex produces equipment and apparel for tennis, badminton, golf, and running."
        />
      </Head>
      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
                History
              </h2>
              <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Victor
              </h1>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <Image
                      className="rounded-lg object-cover object-center shadow-lg"
                      src="/photos/monr.jpg"
                      alt="Victor"
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <Image
                      className="rounded-lg object-cover object-center shadow-lg"
                      src="/photos/victorshuttle.jpg"
                      alt=" The Victor Gold Champion shuttlecock "
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">
                      {" "}
                      The Victor Gold Champion shuttlecock{" "}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="mx-auto max-w-prose text-base lg:max-w-none">
                <div className="lg:pr-50 relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl">
                  <p className="text-lg text-indigo-600">
                    Victor is one of the leading badminton brands in the world,
                    known for producing high-quality badminton equipment
                    including rackets, shuttles, bags, shoes, and clothing.
                  </p>
                </div>
                <p className="text-lg text-gray-500">
                  Founded in Taiwan in 1968, Victor has been dedicated to
                  developing and manufacturing badminton products that meet the
                  needs of players of all levels.
                </p>

                <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                  <p>
                    One of the key features of Victor badminton rackets is their
                    technology. Victor has patented several technologies such as
                    the Nano-Fortify, which increases the durability and
                    stiffness of the racket, and the Sword, which enhances the
                    aerodynamics of the racket frame. These technologies ensure
                    that Victor rackets are not only durable but also offer
                    excellent performance on the court.
                  </p>
                  <p>
                    Victor also produces high-quality shuttlecocks that are used
                    in professional badminton tournaments around the world. The
                    Victor Gold Champion shuttlecock is one of the most popular
                    shuttlecocks used in tournaments due to its durability and
                    consistency.
                  </p>
                  <p>
                    In addition to rackets and shuttles, Victor also produces a
                    range of badminton bags, shoes, and clothing. These products
                    are designed with the needs of badminton players in mind,
                    offering comfort, durability, and style.
                  </p>
                  <ul role="list">
                    <div className="lg:pr-50 relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl">
                      <p className="text-lg text-indigo-600"></p>
                    </div>
                  </ul>
                  <p>
                    Overall, Victor is a trusted brand in the badminton world
                    and is known for producing products that are high-quality,
                    reliable, and innovative. Whether you are a professional
                    player or a beginner, Victor has the equipment you need to
                    improve your game and enjoy the sport of badminton to the
                    fullest.
                  </p>
                  <div className="mx-auto mt-1 flex max-w-prose text-base lg:max-w-none"></div>
                  <div className="rounded-md shadow">
                    <a
                      href="Li-ning"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    >
                      Li-ning
                    </a>
                    <div className="ml-4 rounded-md shadow"></div>
                    <div className="mx-auto mt-1 flex max-w-prose text-base lg:max-w-none"></div>
                    <div className="rounded-md shadow">
                      <a
                        href="begin"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                      >
                        How to choose a racket?
                      </a>
                      <div className="ml-4 rounded-md shadow"></div>
                    </div>
                    <div className="rounded-md shadow"></div>
                    <div className="mx-auto mt-1 flex max-w-prose text-base lg:max-w-none"></div>
                    <div className="rounded-md shadow">
                      <a
                        href="yonex"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                      >
                        Yonex
                      </a>
                      <div className="ml-4 rounded-md shadow"></div>
                    </div>
                    <div className="rounded-md shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
