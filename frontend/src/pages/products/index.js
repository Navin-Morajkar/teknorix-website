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
