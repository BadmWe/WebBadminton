/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CameraIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
              History
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Yonex
            </h3>
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
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="https://originalclassic.com.my/image/originalclassic/image/data/yonex-01.jpg"
                    alt=""
                    width={1184}
                    height={1376}
                  />
                </div>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="https://img.tennis-warehouse.com/watermark/rsg.php?path=/content_images/YonexBRANDOAbout/YonexC1.JPG&nw=780"
                    alt=""
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2"> Minoru Yoneyama</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <div className="lg:pr-50 relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl">
                <p className="text-lg text-indigo-600">
                  Yonex-is a Japanese sports equipment manufacturing company.
                </p>
              </div>
              <p className="text-lg text-gray-500">
                Yonex produces equipment and apparel for tennis, badminton,
                golf, and running. The company was founded in 1946 by Minoru
                Yoneyama as a producer of wooden floats for fishing nets.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                The company was later forced out of this market because of the
                invention of plastic floats. This led to a commitment by
                Yoneyama to never again be left behind by technological
                advancements.
              </p>
              <p>
                In 1957, Yoneyama began to make badminton racquets for other
                brands. By 1961, the first Yoneyama-branded racquet was
                introduced, and within another two years an export company was
                created for the worldwide distribution. After the company began
                to make aluminium badminton racquets in 1969, it found that the
                same technology could be applied to the tennis racket which the
                company introduced in 1971. The company began to experiment with
                graphite shafts for both types of rackets and found that these
                would also be useful for golf clubs.
              </p>
              <p>
                In 1982 Yonex came out with the new oversized tennis racquet in
                the REX-series with the R-7 and R-10 racquets. At that time
                Martina Navratilova played with the R-7 and was very successful.
                One year later, the new series Rexking was developed with the
                R-22. Navratilova subsequently used the white RQ 180 widebody
                frame until the early 1990s.
              </p>
              <ul role="list">
                <div className="lg:pr-50 relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl">
                  <p className="text-lg text-indigo-600">
                    Yonex advertising banners at the 2013 badminton French Open
                  </p>
                </div>
              </ul>
              <p>
                Finding a growing market, the Yonex Corporation (a wholly owned
                subsidiary) was established in Torrance, California, US in July
                1983. In 1992 Yonex introduced the widebody badminton racket,
                the &quot;Isometric 500&quot;, a racquet that was much less
                &quot;tear drop&quot;-shaped than previous ones. The more
                &quot;square&quot; head gave it a much larger striking surface,
                which provides a larger &quot;sweet &quot;spot&quot; to hit the
                shuttle. It led other manufacturers to follow suit in
                &quot;square-head&quot; or isometric designs.
              </p>
              <p>
                The parent company was listed on the Tokyo Stock Exchange in
                1994. Yonex describes itself as the world leader in golf, tennis
                and badminton equipment. Yonex provides clothing for national
                badminton associations around the world, such as the Malaysian
                Badminton Association, Badminton Scotland, Badminton England,
                Badminton Ireland, and Badminton Wales. Yonex has also been
                teaming up with OCBC (Orange County Badminton Club) since 2007
                to host the annual U.S. Open Grand Prix Badminton Championships.
              </p>
              <p>
                Yonex has become the dominant corporate player in badminton.
                Yonex sponsors the All England Open Badminton Championships and
                is a partner of the Badminton World Federation which organizes
                the World Championships. Upwards of 80% of competitive players
                use their racquets, as it is the preferred choice amongst
                professionals. Yonex is significant in the tennis and golf
                industries as well and is a major sponsor of professional
                athletes in all three sports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
