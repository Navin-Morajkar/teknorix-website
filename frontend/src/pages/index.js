import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "../components/header/header" 
import Cards from "../components/six_cards/six_cards"
import { Container } from 'postcss' 
import Container_left from '../components/container_left/container_left' 
import Style from "../components/six_cards/six_cards.module.css"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className='text-center'>Teknorix</h1> 
      <Header/>  
      <div className={Style.parent}>
    <Cards/>
    <Cards/>
    <Cards/>
    </div> 
    <Container_left/>
    </div>
    
  )
}
