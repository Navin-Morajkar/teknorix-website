import Header from "@/components/Header/Header";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import SixCards from "@/components/SixCards/SixCards";
import FlowContainer from "@/components/FlowContainer/FlowContainer";
import WantToLearnMore from "@/components/WantToLearnMoreForm/WantToLearnMoreForm";
import { useEffect } from "react";
import { useSidebar } from "@/components/SidebarContext";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ProcessPage"
  );

  const advantageResponse = await fetch(
    "http://13.233.214.226:1337/api/advantages?populate=*&filters[Page][$eq]=ProcessPage"
  );

  const flowResponse = await fetch(
    "http://13.233.214.226:1337/api/flows?populate=*&filters[Page][$eq]=ProcessPage"
  );

  const ourJobsDataResponse = await fetch(
    "http://13.233.214.226:1337/api/our-services?populate=*&filters[Type][$eq]=CustomSoftwareDevelopment"
  );

  const sidebarDataResponse = await fetch(
    "http://13.233.214.226:1337/api/sidebar-contents?filters[page][$eq]=ProcessPage"
  );

  const headerData = await headerResponse.json();
  const advantageData = await advantageResponse.json();
  const flowData = await flowResponse.json();
  const ourJobsData = await ourJobsDataResponse.json();
  const sidebarData = await sidebarDataResponse.json();

  return {
    props: {
      headerData: headerData.data,
      advantageData: advantageData.data,
      flowData: flowData.data,
      ourJobsData: ourJobsData.data,
      sidebarData: sidebarData.data
    },
  };
}

export default function Home({
  headerData,
  advantageData,
  flowData,
  ourJobsData,
  sidebarData
}) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

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
    <div className="bg-gray-100">
      <Header data={getDataBySortOrder(headerData, 0)} />
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-0">
          <div className="w-full md:w-1/2 lg:w-1/3 ">
            <SixCards data={getDataBySortOrder(advantageData, 1)} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 ">
            <SixCards data={getDataBySortOrder(advantageData, 2)} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 ">
            <SixCards data={getDataBySortOrder(advantageData, 3)} />
          </div>
        </div>

        <div className="flex flex-wrap -mx-0">
          <div className="w-full md:w-1/2 lg:w-1/3 ">
            <SixCards data={getDataBySortOrder(advantageData, 4)} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 ">
            <SixCards data={getDataBySortOrder(advantageData, 5)} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 ">
            <SixCards data={getDataBySortOrder(advantageData, 6)} />
          </div>
        </div>
      </div>

      <Header data={getDataBySortOrder(headerData, 1)} />
      <FlowContainer data={getDataBySortOrder(flowData, 1)} />
      <FlowContainer data={getDataBySortOrder(flowData, 2)} />
      <FlowContainer data={getDataBySortOrder(flowData, 3)} />
      <FlowContainer data={getDataBySortOrder(flowData, 4)} />
      <FlowContainer data={getDataBySortOrder(flowData, 5)} />

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

      <WantToLearnMore />
    </div>
  );
}
