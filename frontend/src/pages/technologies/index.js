import Header from "@/components/Header/Header";
import TechStack from "@/components/TechStack/TechStack";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import WantToLearnMore from "@/components/WantToLearnMoreForm/WantToLearnMoreForm";
import { useEffect } from "react";
import { useSidebar } from "@/components/SidebarContext";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=TechnologiesPage"
  );
  const headerData = await headerResponse.json();

  const technologyResponse = await fetch(
    "http://13.233.214.226:1337/api/tech-stacks?populate=*&pagination[start]=0&pagination[limit]=100"
  );
  const technologyData = await technologyResponse.json();

  const ourJobsDataResponse = await fetch(
    "http://13.233.214.226:1337/api/our-works?populate=*&filters[Page][$eq]"
  );
  const ourJobsData = await ourJobsDataResponse.json();

  const sidebarDataResponse = await fetch(
    "http://13.233.214.226:1337/api/sidebar-contents?filters[page][$eq]=TechnologiesPage"
  );
  const sidebarData = await sidebarDataResponse.json();

  return {
    props: {
      headerData: headerData.data,
      technologyData: technologyData.data,
      ourJobsData: ourJobsData.data,
      sidebarData: sidebarData.data
    },
  };
}

export default function Home({ headerData, technologyData, ourJobsData, sidebarData, }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  const filterTechnologyByType = (data, type) => {
    return data.filter((item) => item.attributes.Type === type);
  };

  const filteredWeb = filterTechnologyByType(technologyData, "Web");
  const filteredMobile = filterTechnologyByType(technologyData, "Mobile");
  const filteredDataScience = filterTechnologyByType(technologyData, "DataScience");
  const filteredBigData = filterTechnologyByType(technologyData, "BigData");
  const filteredMaps = filterTechnologyByType(technologyData, "GIS/Maps");
  const filteredCloud = filterTechnologyByType(technologyData, "Cloud");

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

      <div className="text-center mt-4">
      <div className="flex flex-wrap flex-row">
        {filteredWeb.map((technology) => (
          <TechStack key={technology.id} data={technology} />
        ))}
      </div>
      </div>
      <Header data={getDataBySortOrder(headerData, 1)} />
      <div className="text-center mt-4">
      <div className="flex flex-wrap flex-row">
        {filteredMobile.map((technology) => (
          <TechStack key={technology.id} data={technology} />
        ))}
      </div></div>
      <Header data={getDataBySortOrder(headerData, 2)} />
      <div className="text-center mt-4">
      <div className="flex flex-wrap flex-row">
        {filteredDataScience.map((technology) => (
          <TechStack key={technology.id} data={technology} />
        ))}
      </div></div>
      <Header data={getDataBySortOrder(headerData, 3)} />
      <div className="text-center mt-4">
      <div className="flex flex-wrap flex-row">
        {filteredBigData.map((technology) => (
          <TechStack key={technology.id} data={technology} />
        ))}
      </div></div>
      <Header data={getDataBySortOrder(headerData, 4)} />
      <div className="text-center mt-4">
      <div className="flex flex-wrap flex-row">
        {filteredMaps.map((technology) => (
          <TechStack key={technology.id} data={technology} />
        ))}
      </div></div>

      <Header data={getDataBySortOrder(headerData, 5)} />
      <div className="text-center mt-4">
      <div className="flex flex-wrap flex-row">
        {filteredCloud.map((technology) => (
          <TechStack key={technology.id} data={technology} />
        ))}

      </div> </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-0">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <OurWork />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <OurJobs data={getDataBySortOrder(ourJobsData, 5)} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <OurJobs data={getDataBySortOrder(ourJobsData, 8)} />
          </div>
        </div>
      </div>

      <WantToLearnMore />
    </div>
  );
}
