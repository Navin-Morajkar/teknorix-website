import Image from 'next/image'
import React from 'react'
import useFetch from '../hooks/useFetch.js'

export default function Home() {

  const { loading, error, data } = useFetch('http://localhost:1337/api/headers?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)


  return (
    <div>
      <h1 className='text-center'>Teknorix</h1> 
      <div>
        <Image src={data.data[0].attributes.headerImage.data.attributes.formats.large.url} alt="My Image" width={1470} height={650} />
      </div>
      
    </div>
    
  )
}
