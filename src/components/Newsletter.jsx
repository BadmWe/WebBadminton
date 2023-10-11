import Image from 'next/image'
import { Web3Storage } from 'web3.storage'
import React, { useState } from 'react'
import Link from 'next/link'

const token = process.env.NEXT_PUBLIC_TOKEN
function makeStorageClient() {
  return new Web3Storage({ token })
}

function makeFileObjects(text) {
  // You can create File objects from a Blob of binary data
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!

  // const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
  console.log(text)
  const obj = { email: text }
  const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
  const files = [
    //new File(['contents-of-file-1'], 'plain-utf8.txt'),
    new File([blob], 'email.json'),
  ]
  return files
}

async function storeFiles(files) {
  const client = makeStorageClient()
  const cid = await client.put(files)
  console.log('stored files with cid:', cid)
  return cid
}

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  const [input, setInput] = useState('')

  async function sendEmail() {
    //console.log(input)
    storeFiles(makeFileObjects(input))
  }

  const saveEmail = (event) => {
    event.preventDefault()
    sendEmail(input)
  }

  return (
    <section id="newsletter" aria-label="Newsletter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <div className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]">
            <Image
              src='/background-newsletter.jpg'
              alt="Newsletter"
              layout="fixed"
              width={919}
              height={1351}
              unoptimized
            />
          </div>
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Get updates on all of our events.
              </p>
              <Link href="/items">
                <div className=" mt-4 text-lg tracking-tight text-blue-900">
                  Our store
                </div>
              </Link>
              
              <Link href="https://twitter.com/WebBadminton4u">
                <div className=" mt-4 text-lg tracking-tight text-blue-900">
                  Twitter
                </div>
              </Link>
              <Link href="https://www.instagram.com/web_badminton/">
                <div className=" mt-4 text-lg tracking-tight text-blue-900">
                  Instagram
                </div>
              </Link>

            </div>
            <form onSubmit={saveEmail}>
              <h3 className="text-lg font-semibold tracking-tight text-blue-900">
                Sign up to our newsletter <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                <input
                  type="email"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <button type="submit">
                  <span className="sr-only sm:not-sr-only">Sign up today</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
