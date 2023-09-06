import Image from 'next/image'
import React from 'react'
import Header from '@/components/Header2/Header'


import Styles from '../components/SixCards/SixCards.module.css'
import Sidebar from '@/components/Sidebar/Sidebar'
import Container from '@/components/Container/Container'
import Expertise from '@/components/Expertise/Expertise'

export default function Home() {

  


  return (
    <div> 
      <Sidebar />
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