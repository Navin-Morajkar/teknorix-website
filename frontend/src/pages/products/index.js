import Header from "../components/header/header" 
import Cards from "../components/six_cards/six_cards"
import { Container } from 'postcss' 
import Container_left from '../components/container_left/container_left' 
import Achievement from "../components/achievement/achievement"
import Style from "../components/six_cards/six_cards.module.css" 

export default function index() {
  return (
    <div>
        <h2>Products Landing Page</h2>
        <Header/>  
        <div className={Style.parent}>
          <Cards/>
          <Cards/>
          <Cards/>
        </div> 
        <Container_left/> 
        <Achievement/>
    </div>
  )
}
