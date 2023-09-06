import Header from "../../components/Header/Header";
import Six_cards from "../../components/SixCards/SixCards"; 
import Quote_form from "../../components/QuoteForm/QuoteForm" 
import Flow_container from "../../components/FlowContainer/FlowContainer" 
import Our_job from "../../components/OurJobs/OurJobs" 
import Our_work from"../../components/OurWork/OurWork"
import Style from "../../components/SixCards/SixCards.module.css"
export default function index() {
  return (
    <div>
      
        <Header entryId={5} /> 
        <div className={Style.parent}>
              {[1, 2, 3].map(entryId => (
                <Six_cards key={entryId} entryId={entryId} />
              ))}
            </div>

          <div className={Style.parent}>
          {[4, 5, 6].map(entryId => (
                <Six_cards key={entryId} entryId={entryId} />
              ))}
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