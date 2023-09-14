import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import Styles from "@/components/SixCards/SixCards.module.css";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Container from "@/components/Container/Container";
import CaterTo from "@/components/CaterTo/CaterTo";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=DevopsServicePage "
  );

  const serviceAdvantageResponse = await fetch(
    "http://13.233.214.226:1337/api/service-advantages?populate=*"
  );

  const serviceVectorResponse = await fetch(
    "http://13.233.214.226:1337/api/service-page-vectors?populate=*&pagination[start]=0&pagination[limit]=100"
  );

  const sectionHeaderResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=CloudInfrastructureManagementPage"
  );

  // const flowResponse=await fetch()

  const sectionHeaderData = await sectionHeaderResponse.json();
  const headerData = await headerResponse.json();
  const serviceVectorData = await serviceVectorResponse.json();

  const serviceAdvantageData = await serviceAdvantageResponse.json();
  return {
    props: {
      headerData: headerData.data,
      serviceAdvantageData: serviceAdvantageData.data,
      serviceVectorData: serviceVectorData.data,
      sectionHeaderData: sectionHeaderData.data,
    },
  };
}

export default function Home({
  headerData,
  serviceAdvantageData,
  serviceVectorData,
  sectionHeaderData,
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

      <h1 className="text-center text-6xl">Our Process</h1>

      <div className={Styles.child}>
        {filteredTechnology.map((image) => (
          <Container key={image.id} data={image} />
        ))}
      </div>

      <QuoteForm />
    </div>
  );
}
