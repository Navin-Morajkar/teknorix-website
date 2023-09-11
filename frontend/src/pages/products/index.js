import Header from "../../components/Header/Header";
import { Container } from "postcss";
import ContainerLeft from "../../components/ContainerLeft/ContainerLeft";
import ContainerRight from "../../components/ContainerRight/ContainerRight";
import WantToLearnMoreform from "../../components/WantToLearnMoreForm/WantToLearnMoreForm" 
import Footer from '../../components/Footer/Footer'

import Sidebar from "@/components/Sidebar/Sidebar";
export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ProductsPage"
  );
  const headerData = await headerResponse.json(); 
  const productResponse = await fetch(
    "http://13.233.214.226:1337/api/products?populate=*&filters[Page][$eq]=ProductsPage"
  );
  const productData = await productResponse.json();

  

  return {
    props: {
      headerData: headerData.data,
      productData:productData.data
    },
  };
}

export default function Home({ headerData,productData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };
  return (
    <div> 
      <Sidebar />
      <Header data={getDataBySortOrder(headerData, 0)} />
      <ContainerLeft  data={getDataBySortOrder(productData,1)} />
      <ContainerRight data={getDataBySortOrder(productData,2)} />           
      <ContainerLeft data={getDataBySortOrder(productData,3)} />
      <WantToLearnMoreform />
    </div>
   
  );
}
