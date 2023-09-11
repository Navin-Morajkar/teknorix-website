import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

import Style from "@/components/SixCards/SixCards.module.css";

export async function getServerSideProps() {
    const headerResponse = await fetch(
      "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=OurWorksPage"
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
      
      

        
        
       
      
        
      </div>
    
  );
}


