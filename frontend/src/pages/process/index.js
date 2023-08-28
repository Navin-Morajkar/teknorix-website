import Header from "../../components/header/header";
import Six_cards from "../../components/six_cards/six_cards"; 
import Quote_form from "../../components/quote_form/quote_form" 
import Flow_container from "../../components/flow_container/flow_container" 
import Our_job from "../../components/our_jobs/our_jobs" 
import Our_work from"../../components/our_work/our_work"
import Style from "../../components/six_cards/six_cards.module.css"
export default function index() {
  return (
    <div>
      
        <Header entryId={5} /> 
        <div className={Style.parent}>
          <Six_cards entryId={1}/>
          <Six_cards entryId={2}/>
          <Six_cards entryId={3}/> 
          </div> 
          <div className={Style.parent}>
          <Six_cards entryId={4}/>
          <Six_cards entryId={5}/>
          <Six_cards entryId={6}/>
          </div> 
          <Header entryId={6} />  
          <Flow_container entryId={1} />
          <Flow_container entryId={2} />
          <Flow_container entryId={3} />
          <Flow_container entryId={4} />
          <Flow_container entryId={5} />  
          <div className={Style.parent}>
          <Our_work/>
          <Our_job entryId={2} />
          <Our_job entryId={3} />
          </div>
          <Quote_form/>
    </div>
  )
}
