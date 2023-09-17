import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import ContainerRight from "@/components/ContainerRight/ContainerRight";
import Styles from "@/components/SixCards/SixCards.module.css";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Container from "@/components/Container/Container";
import CaterTo from "@/components/CaterTo/CaterTo";
import WantToLearnMore from "@/components/WantToLearnMoreForm/WantToLearnMoreForm";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=TechnicalArchitecturePage"
  );

  const serviceAdvantageResponse = await fetch(
    "http://13.233.214.226:1337/api/service-advantages?populate=*"
  );

  const serviceVectorResponse = await fetch(
    "http://13.233.214.226:1337/api/service-page-vectors?populate=*"
  );

  const headerData = await headerResponse.json();
  const serviceAdvantageData = await serviceAdvantageResponse.json();
  const serviceVectorData = await serviceVectorResponse.json();

  return {
    props: {
      headerData: headerData.data,
      serviceAdvantageData: serviceAdvantageData.data,
      serviceVectorData: serviceVectorData.data,
    },
  };
}

export default function Home({
  headerData,
  serviceAdvantageData,
  serviceVectorData,
}) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  const filterService = (data, type, sortOrder) => {
    return data.find(
      (item) =>
        item.attributes.Type === type && item.attributes.SortOrder === sortOrder
    );
  };

  const filterImageByType = (data, type) => {
    return data.filter((item) => item.attributes.Type === type);
  };

  const filteredSvg = filterImageByType(serviceVectorData, "CaterTo");
  const filteredTechnology = filterImageByType(serviceVectorData, "OurProcess");

  return (
    <div>
      <Header data={getDataBySortOrder(headerData, 0)} />
      <ContainerLeft data={filterService(serviceAdvantageData, "WhyUs", 1)} />

      <CaterTo />

      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Our process
      </h1>
      <div className="flex flex-wrap justify-center">
        {filteredTechnology.map((image) => (
          <div key={image.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Container data={image} />
          </div>
        ))}
      </div>
      <WantToLearnMore />      
    </div>
  );
}
