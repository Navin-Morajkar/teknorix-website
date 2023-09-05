import Image from 'next/image'
import React from 'react'
import Header from '@/components/Header/Header.js'
import Container from '@/components/Container/Container'
import Expertise from '@/components/Expertise/Expertise'
import Styles from '../components/SixCards/SixCards.module.css'

export default function Home() {

  


  return (
    <div>
      <Header entryId={1} />
      <div className={Styles.parent}>
        <Container entryId={1}/>
        <Container entryId={2}/>
        <Container entryId={3}/>
      </div>
      <a href="/services">Learn More about our services</a>

      <h1 className="">Our Unique 3U's towards your success</h1>
      <div className={Styles.parent}>
        <Container entryId={4}/>
        <Container entryId={5}/>
        <Container entryId={6}/>
      </div>
      <h1 className="">Our Expertise</h1>
      <div className={Styles.parent}>
        <Expertise entryId={1} />
        <Expertise entryId={2} />
        <Expertise entryId={3} />
      </div>

      <Header entryId={2} /> 
      
      
      
    </div>
    
  )
}