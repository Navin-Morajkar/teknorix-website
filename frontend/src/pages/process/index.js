import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

import Style from "@/components/SixCards/SixCards.module.css";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Footer from "@/components/Footer/Footer";
import SixCards from "@/components/SixCards/SixCards";
import FlowContainer from "@/components/FlowContainer/FlowContainer";

export async function getServerSideProps() {
    const headerResponse = await fetch(
      "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ProcessPage"
    );
    const headerData = await headerResponse.json();
  
    const advantageResponse = await fetch(
      "http://13.233.214.226:1337/api/advantages?populate=*&filters[Page][$eq]=ProcessPage"
    );
    const advantageData = await advantageResponse.json();

    const flowResponse = await fetch(
      "http://13.233.214.226:1337/api/flows?populate=*&filters[Page][$eq]=ProcessPage"
    );
    const flowData = await flowResponse.json();
  
    return {
      props: {
        headerData: headerData.data,
        advantageData: advantageData.data,
        flowData:flowData.data,
      },
    };
  }
  

export default function Home({ headerData, advantageData,flowData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

 

  return (
    <div>
      
      <Header data={getDataBySortOrder(headerData, 0)} />
      
      <div className={Style.parent}>
          
          <SixCards data={getDataBySortOrder(advantageData,1)} />
          <SixCards data={getDataBySortOrder(advantageData,2)} />
          <SixCards data={getDataBySortOrder(advantageData,3)} />
      </div>
      <div className={Style.parent}>
          
          <SixCards data={getDataBySortOrder(advantageData,4)} />
          <SixCards data={getDataBySortOrder(advantageData,5)} />
          <SixCards data={getDataBySortOrder(advantageData,6)} />
      </div>
        

        
        <Header data={getDataBySortOrder(headerData, 1)} />
        <FlowContainer data={getDataBySortOrder(flowData,1)} />
        <FlowContainer data={getDataBySortOrder(flowData,2)} />
        <FlowContainer data={getDataBySortOrder(flowData,3)} />
        <FlowContainer data={getDataBySortOrder(flowData,4)} />
        <FlowContainer data={getDataBySortOrder(flowData,5)} />
        
        <div className={Style.parent}>
          <OurWork />
          <OurJobs entryId={4} />
          <OurJobs entryId={5} />
        </div>
        <QuoteForm />
        
      </div>
    
  );
}


