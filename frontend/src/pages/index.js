import Image from 'next/image'
import React from 'react'

import Header from '@/components/header/header.js'
export default function Home() {

  


  return (
    <div>
      <h1 className='text-center'>Teknorix</h1> 
      <div>
      <Header entryId={1} /> 
      <Header entryId={2} /> 
      
      </div>
      
    </div>
    
  )
}
