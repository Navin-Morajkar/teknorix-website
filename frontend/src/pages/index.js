import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "../components/header/header" 
import header_image from '../components/header_image/header_image'
import Cards from "../components/six_cards/six_cards"
import { Container } from 'postcss' 
import Container_left from '../components/container_left/container_left' 
import Achievement from "../components/achievement/achievement"
import Style from "../components/six_cards/six_cards.module.css" 
import React from 'react'
import useFetch from '../hooks/useFetch.js'


// const inter = Inter({ subsets: ['latin'] })

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
