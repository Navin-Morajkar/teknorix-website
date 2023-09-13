import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import ContainerRight from "@/components/ContainerRight/ContainerRight";
import Styles from "@/components/SixCards/SixCards.module.css";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Container from "@/components/Container/Container";
import CaterTo from "@/components/CaterTo/CaterTo";


export async function getServerSideProps() {
  const headerResponse = await fetch("http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ProductStrategyPage");

  const serviceAdvantageResponse = await fetch("http://13.233.214.226:1337/api/service-advantages?populate=*");
  const serviceVectorResponse = await fetch("http://13.233.214.226:1337/api/service-page-vectors?populate=*");

  const headerData = await headerResponse.json();
  
  const serviceAdvantageData = await serviceAdvantageResponse.json();
  const serviceVectorData=await serviceVectorResponse.json();
  
  return {
    props: {
      headerData: headerData.data,
      serviceAdvantageData:serviceAdvantageData.data,
      serviceVectorData:serviceVectorData.data
      
      
    },
  };
}

export default function Home({ headerData, serviceAdvantageData,serviceVectorData }) {
  
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  const filterService= (data, type, sortOrder) => {
    return data.find(
      (item) =>
        item.attributes.Type === type && item.attributes.SortOrder === sortOrder
    );
  };

  const filterImageByType = (data, type) => {
    return data.filter((item) => item.attributes.Type === type);
  };


  const filteredSvg = filterImageByType(serviceVectorData, "CaterTo");

  const filteredProcess = filterImageByType(serviceVectorData, "OurProcess");


  return (
    <div>

      
      <Header data={getDataBySortOrder(headerData, 0)} />
      <ContainerLeft data={filterService(serviceAdvantageData,"WhyUs",1)} />
      
      
      <CaterTo />
      
      <h1 className="text-center text-8xl">
        Our Process
      </h1>
      <div className={Styles.child}>
        {filteredProcess.map((image) => (
          <Container key={image.id} data={image} />
        ))}
      </div>
     

      
        <QuoteForm />

    </div>
  );
}
