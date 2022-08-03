import React, { useEffect } from 'react'
import { Web3Storage } from 'web3.storage'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'

const token = process.env.NEXT_PUBLIC_TOKEN
function makeStorageClient() {
  return new Web3Storage({ token })
}

async function storeFiles(files) {
  const client = makeStorageClient()
  const cid = await client.put(files)
  console.log('stored files with cid:', cid)
  return cid
}

function makeFileObjects() {
  // You can create File objects from a Blob of binary data
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!
  const obj = { hello: 'world' }
  const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })

  const files = [
    new File(['contents-of-file-1'], 'plain-utf8.txt'),
    new File([blob], 'hello.json'),
  ]
  return files
}

export default function Home() {
  useEffect(() => {
    console.log(makeFileObjects()[1])
    storeFiles(makeFileObjects())
  })
  return (
    <>
      <Hero />
      <Newsletter />
    </>
  )
}
