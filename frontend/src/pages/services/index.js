import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import ContainerRight from "@/components/ContainerRight/ContainerRight";
import Style from "@/components/SixCards/SixCards.module.css";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import WantToLearnMore from "@/components/WantToLearnMoreForm/WantToLearnMoreForm";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ServicesPage"
  );
  const headerData = await headerResponse.json();

  const serviceResponse = await fetch(
    "http://13.233.214.226:1337/api/our-services?populate[image][fields][1]=url"
  );
  const serviceData = await serviceResponse.json();

  return {
    props: {
      headerData: headerData.data,
      serviceData: serviceData.data,
    },
  };
}

export default function Home({ headerData, serviceData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };
  const filterService = (data, type, sortOrder) => {
    return data.find(
      (item) =>
        item.attributes.Type === type && item.attributes.SortOrder === sortOrder
    );
  };

  return (
    <div>
      <Header data={getDataBySortOrder(headerData, 0)} />

      <ContainerRight data={filterService(serviceData, "ITConsulting", 1)} />
      <ContainerLeft data={filterService(serviceData, "ITConsulting", 2)} />
      <ContainerRight data={filterService(serviceData, "ITConsulting", 3)} />

      <Header data={getDataBySortOrder(headerData, 1)} />

      <ContainerRight
        data={filterService(serviceData, "CustomSoftwareDevelopment", 1)}
      />
      <ContainerLeft
        data={filterService(serviceData, "CustomSoftwareDevelopment", 2)}
      />
      <ContainerRight
        data={filterService(serviceData, "CustomSoftwareDevelopment", 3)}
      />

      <Header data={getDataBySortOrder(headerData, 2)} />
      <ContainerRight
        data={filterService(serviceData, "ManagedITServices", 1)}
      />
      <ContainerLeft
        data={filterService(serviceData, "ManagedITServices", 2)}
      />
      <ContainerRight
        data={filterService(serviceData, "ManagedITServices", 3)}
      />

      <div className={Style.parent}>
        <OurWork />
        <OurJobs entryId={4} />
        <OurJobs entryId={5} />
      </div>
      {/* <QuoteForm /> */}
      <WantToLearnMore />
    </div>
  );
}
