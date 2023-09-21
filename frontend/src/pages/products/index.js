import Header from "../../components/Header/Header";
import ContainerLeft from "../../components/ContainerLeft/ContainerLeft";
import ContainerRight from "../../components/ContainerRight/ContainerRight";
import WantToLearnMoreform from "../../components/WantToLearnMoreForm/WantToLearnMoreForm";
import { useEffect } from "react";
import { useSidebar } from "@/components/SidebarContext";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ProductsPage"
  );
  const headerData = await headerResponse.json();
  const productResponse = await fetch(
    "http://13.233.214.226:1337/api/products?populate=*&filters[Page][$eq]=ProductsPage"
  );
  const productData = await productResponse.json();

  const sidebarDataResponse = await fetch(
    "http://13.233.214.226:1337/api/sidebar-contents?filters[page][$eq]=ProductsPage"
  );
  const sidebarData = await sidebarDataResponse.json();

  return {
    props: {
      headerData: headerData.data,
      productData: productData.data,
      sidebarData: sidebarData.data,
    },
  };
}

export default function Home({ headerData, productData, sidebarData }) {
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
      <ContainerLeft data={getDataBySortOrder(productData, 1)} />
      <ContainerRight data={getDataBySortOrder(productData, 2)} />
      <ContainerLeft data={getDataBySortOrder(productData, 3)} />
      <WantToLearnMoreform />
    </div>
  );
}
