import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import ContainerRight from "@/components/ContainerRight/ContainerRight";
import { useEffect } from "react";
import { useSidebar } from "@/components/SidebarContext";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=OurWorksPage"
  );
  const headerData = await headerResponse.json();

  const portfolioResponse = await fetch(
    "http://13.233.214.226:1337/api/our-works?populate[image][fields][1]=url"
  );
  const portfolioData = await portfolioResponse.json();
  const sidebarDataResponse = await fetch(
    "http://13.233.214.226:1337/api/sidebar-contents?filters[page][$eq]=OurWorksPage"
  );
  const sidebarData = await sidebarDataResponse.json();

  return {
    props: {
      headerData: headerData.data,
      portfolioData: portfolioData.data,
      sidebarData: sidebarData.data
    },
  };
}

export default function Home({ headerData, portfolioData, sidebarData }) {
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
    <div>
      <Header data={getDataBySortOrder(headerData, 0)} />
      <ContainerRight data={getDataBySortOrder(portfolioData, 1)} />
      <ContainerLeft data={getDataBySortOrder(portfolioData, 2)} />
      <ContainerRight data={getDataBySortOrder(portfolioData, 3)} />
      <ContainerLeft data={getDataBySortOrder(portfolioData, 4)} />
      <ContainerRight data={getDataBySortOrder(portfolioData, 5)} />
      <ContainerLeft data={getDataBySortOrder(portfolioData, 6)} />
      <ContainerRight data={getDataBySortOrder(portfolioData, 7)} />
      <ContainerLeft data={getDataBySortOrder(portfolioData, 8)} />
      <ContainerRight data={getDataBySortOrder(portfolioData, 9)} />
    </div>
  );
}
