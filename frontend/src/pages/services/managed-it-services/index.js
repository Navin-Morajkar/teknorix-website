
import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import ContainerRight from "@/components/ContainerRight/ContainerRight";
import Styles from "@/components/SixCards/SixCards.module.css";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Container from "@/components/Container/Container";


export async function getServerSideProps() {
  const headerResponse = await fetch("http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ManagedITServicesPage");
  const serviceResponse = await fetch("http://13.233.214.226:1337/api/our-services?populate[image][fields][1]=url");
  const serviceAdvantageResponse = await fetch("http://13.233.214.226:1337/api/service-advantages?populate=*");
  const ourJobsDataResponse = await fetch(
    "http://13.233.214.226:1337/api/our-works?populate=*&filters[Type][$eq]=*"
  );
  
  const headerData = await headerResponse.json();
  const serviceData = await serviceResponse.json();
  const serviceAdvantageData = await serviceAdvantageResponse.json();
  const ourJobsData = await ourJobsDataResponse.json();
  
  return {
    props: {
      headerData: headerData.data,
      serviceData:serviceData.data,
      serviceAdvantageData:serviceAdvantageData.data,
      ourJobsData:ourJobsData.data
      
    },
  };
}

export default function Home({ headerData, serviceData, serviceAdvantageData,ourJobsData }) {
  
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
      <Container  data={filterService(serviceData,"ManagedITServices",1)} />
      <Container data={filterService(serviceData,"ManagedITServices",2)} />
      <Container data={filterService(serviceData,"ManagedITServices",3)} />
      </div>

      <ContainerLeft data={getDataBySortOrder(serviceAdvantageData,1)} />
      <ContainerRight data={getDataBySortOrder(serviceAdvantageData,2)} />
      <ContainerLeft data={getDataBySortOrder(serviceAdvantageData,3)} />
      

      <div className="container mx-auto">
  <div className="flex flex-wrap -mx-0">
    <div className="w-full md:w-1/2 lg:w-1/3 ">
      <OurWork />
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 ">
      <OurJobs data={getDataBySortOrder(ourJobsData, 2)} />
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3  ">
      <OurJobs data={getDataBySortOrder(ourJobsData, 1)} />
    </div>
  </div>
</div>
        <QuoteForm />

    </div>
  );
}
