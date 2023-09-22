import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import Styles from "@/components/SixCards/SixCards.module.css";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Container from "@/components/Container/Container";
import CaterTo from "@/components/CaterTo/CaterTo";
import { useEffect } from "react";
import { useSidebar } from "@/components/SidebarContext";
export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=CloudInfrastructureManagementPage"
  );

  const serviceAdvantageResponse = await fetch(
    "http://13.233.214.226:1337/api/service-advantages?populate=*"
  );

  const serviceVectorResponse = await fetch(
    "http://13.233.214.226:1337/api/service-page-vectors?populate=*&pagination[start]=0&pagination[limit]=100"
  );
  const sidebarDataResponse = await fetch(
    "http://13.233.214.226:1337/api/sidebar-contents?filters[page][$eq]=CloudInfrastructureManagementPage"
  );
  const headerData = await headerResponse.json();
  const serviceVectorData = await serviceVectorResponse.json();
  const sidebarData = await sidebarDataResponse.json();
  const serviceAdvantageData = await serviceAdvantageResponse.json();
  return {
    props: {
      headerData: headerData.data,
      serviceAdvantageData: serviceAdvantageData.data,
      serviceVectorData: serviceVectorData.data,
      sidebarData: sidebarData.data,
    },
  };
}

export default function Home({
  headerData,
  serviceAdvantageData,
  serviceVectorData,
  sidebarData
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

  const filteredTechnology = filterImageByType(
    serviceVectorData,
    "CloudTechnology"
  );
  const { setSidebarContent } = useSidebar();

  //Update the Sidebar content when you navigate to this page
  useEffect(() => {
    setSidebarContent({
      title: sidebarData[0].attributes.title,
      subtitle: sidebarData[0].attributes.subtitle,
      description: sidebarData[0].attributes.description,
    });
  }, []);
  return (
    <div>
      <Header data={getDataBySortOrder(headerData, 0)} />
      <ContainerLeft data={filterService(serviceAdvantageData, "WhyUs", 1)} />
      <CaterTo />

      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
      What technologies we use?
    </h1>
    <div className="flex flex-wrap justify-center">
      {filteredTechnology.map((image) => (
        <div key={image.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <Container data={image} />
        </div>
      ))}
    </div>

      <QuoteForm />
    </div>
  );
}
