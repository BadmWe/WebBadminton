import Head from 'next/head'

const posts = [
  {
    title: 'Yonex',
    href: 'yonex',
    category: { name: 'Brand', href: 'yonex' },
    description: '',
    date: 'July 23, 2022',
    datetime: '2022-07-23',
    imageUrl: '/photos/yonexblog.jpg',
    readingTime: '3 min',
  },
  {
    title: 'Li-ning',
    href: 'Li-ning',
    category: { name: 'Brand', href: 'Li-ning' },
    description: '',
    date: 'July 23, 2022',
    datetime: '2022-07-23',
    imageUrl: '/photos/Li-ningblog.jpg',
    readingTime: '4 min',
  },
  /*   {
    title: 'Victor',
    href: 'Victor',
    category: { name: 'Brand', href: '#' },
    description: '',
    date: 'July 17, 2022',
    datetime: '2022-07-17',
    imageUrl:
      'https://badmintonoceania.org/wp-content/uploads/2016/12/36080120_1_O-e1499248108190-800x400.jpg',
    readingTime: '4 min',
  }, */
]

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Web Badminton Posts</title>
        <meta
          name="description"
          content="Here you can learn something new about brands, rackets, players and much more. Stay with us to learn something new about badminton."
        />
        <meta property="og:title" content="WebBadminton Posts" />
        <meta property="og:url" content="https://webbadminton.com/blog" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Here you can learn something new about brands, rackets, players and much more. Stay with us to learn something new about badminton."
        />
        <meta
          property="og:image"
          content="https://webbadminton.com/photos/logolin.jpg"
        />
        {/*
        
        <link rel="icon" href="/favicon.ico" />
        
        <meta
          property="og:description"
          content="A platform where we talk about the rules of badminton, brands, equipment and much more."
        />
        <meta property="og:url" content="https://webbadminton.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/backgound.jpg" />
        */}
      </Head>
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Web Badminton Posts
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Here you can learn something new about brands, rackets, players
              and much more. Stay with us to learn something new about
              badminton.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </a>
                  </div>

                  <time dateTime={post.datetime}>{post.date}</time>

                  <span>{post.readingTime} read</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
