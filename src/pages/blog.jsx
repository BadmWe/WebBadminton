const posts = [
  {
    title: 'Yonex',
    href: '#',
    category: { name: 'Brand', href: '#' },
    description: '',
    date: 'July 17, 2022',
    datetime: '2022-07-17',
    imageUrl:
      'https://www.yonex.com/media/wysiwyg/news/Yonex-News-Holder-Image_1.PNG',
    readingTime: '6 min',
  },
  {
    title: 'Li-ning',
    href: '#',
    category: { name: 'Brand', href: '#' },
    description: '',
    date: 'July 17, 2022',
    datetime: '2022-07-17',
    imageUrl:
      'https://i.pinimg.com/originals/78/9a/e1/789ae113eed49212d27e319bb4d25407.jpg',
    readingTime: '4 min',
  },
  {
    title: 'Victor',
    href: '#',
    category: { name: 'Brand', href: '#' },
    description: '',
    date: 'July 17, 2022',
    datetime: '2022-07-17',
    imageUrl:
      'https://badmintonoceania.org/wp-content/uploads/2016/12/36080120_1_O-e1499248108190-800x400.jpg',
    readingTime: '11 min',
  },
]

export default function Blog() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Posts
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Here you can learn something new about brands, rackets and much
            more.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
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
  )
}
