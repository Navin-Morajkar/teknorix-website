import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import ContainerRight from "@/components/ContainerRight/ContainerRight";
import Style from "@/components/SixCards/SixCards.module.css";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import QuoteForm from "@/components/QuoteForm/QuoteForm";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ServicesPage"
  );
  const headerData = await headerResponse.json();

  const serviceResponse = await fetch(
    "http://13.233.214.226:1337/api/our-services?populate[image][fields][1]=url"
  );
  const serviceData = await serviceResponse.json();
  const ourJobsDataResponse = await fetch(
    "http://13.233.214.226:1337/api/our-works?populate=*&filters[Type][$eq]=CustomSoftwareDevelopment"
  );
  const ourJobsData = await ourJobsDataResponse.json();
  return {
    props: {
      headerData: headerData.data,
      serviceData: serviceData.data,
      ourJobsData: ourJobsData.data,
    },
  };
}

export default function Home({ headerData, serviceData, ourJobsData }) {
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
      <div className="flex flex-wrap justify-around py-12 items-stretch">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <ContainerRight
            data={filterService(serviceData, "ITConsulting", 1)}
          />
        </div>{" "}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <ContainerLeft data={filterService(serviceData, "ITConsulting", 2)} />
        </div>{" "}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"></div>
        <ContainerRight data={filterService(serviceData, "ITConsulting", 3)} />
      </div>
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

      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-0">
          <div className="w-full md:w-1/2 lg:w-1/3 ">
            <OurWork />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 ">
            <OurJobs data={getDataBySortOrder(ourJobsData, 3)} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3  ">
            <OurJobs data={getDataBySortOrder(ourJobsData, 8)} />
          </div>
        </div>
      </div>
      <QuoteForm />
    </div>
  );
}
