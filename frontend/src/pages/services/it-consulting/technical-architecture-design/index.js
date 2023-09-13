import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import ContainerRight from "@/components/ContainerRight/ContainerRight";
import Styles from "@/components/SixCards/SixCards.module.css";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Container from "@/components/Container/Container";


export async function getServerSideProps() {
  const headerResponse = await fetch("http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=TechnicalArchitecturePage");

  const serviceAdvantageResponse = await fetch("http://13.233.214.226:1337/api/service-advantages?populate=*");

  const headerData = await headerResponse.json();
  
  const serviceAdvantageData = await serviceAdvantageResponse.json();
  
  return {
    props: {
      headerData: headerData.data,
      serviceAdvantageData:serviceAdvantageData.data
      
      
    },
  };
}

export default function Home({ headerData, serviceAdvantageData }) {
  
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  const filterService= (data, type, sortOrder) => {
    return data.find(
      (item) =>
        item.attributes.Type === type && item.attributes.SortOrder === sortOrder
    );
  };


  return (
    <div>

      
      <Header data={getDataBySortOrder(headerData, 0)} />
      <ContainerLeft data={filterService(serviceAdvantageData,"WhyUs",1)} />
      <Header data={getDataBySortOrder(headerData,1)} />

      
        <QuoteForm />

    </div>
  );
}
