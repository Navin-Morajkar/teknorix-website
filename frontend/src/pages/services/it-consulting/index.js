




import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import ContainerRight from "@/components/ContainerRight/ContainerRight";
import Styles from "@/components/SixCards/SixCards.module.css";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Container from "@/components/Container/Container";


export async function getServerSideProps() {
  const headerResponse = await fetch("http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ITConsultingPage");
  const serviceResponse = await fetch("http://13.233.214.226:1337/api/our-services?populate[image][fields][1]=url");
  const serviceAdvantageResponse = await fetch("http://13.233.214.226:1337/api/service-advantages?populate=*");

  const headerData = await headerResponse.json();
  const serviceData = await serviceResponse.json();
  const serviceAdvantageData = await serviceAdvantageResponse.json();
  
  return {
    props: {
      headerData: headerData.data,
      serviceData:serviceData.data,
      serviceAdvantageData:serviceAdvantageData.data,
      
    },
  };
}

export default function Home({ headerData, serviceData, serviceAdvantageData }) {
  
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

      <div className={Styles.parent}>
      <Container  data={filterService(serviceData,"ITConsulting",1)} />
      <Container data={filterService(serviceData,"ITConsulting",2)} />
      <Container data={filterService(serviceData,"ITConsulting",3)} />
      </div>

      <ContainerLeft data={getDataBySortOrder(serviceAdvantageData,1)} />
      <ContainerRight data={getDataBySortOrder(serviceAdvantageData,2)} />
      <ContainerLeft data={getDataBySortOrder(serviceAdvantageData,3)} />
      

      <div className={Styles.parent}>
          <OurWork />
          <OurJobs entryId={4} />
          <OurJobs entryId={5} />
        </div>
        <QuoteForm />

    </div>
  );
}
