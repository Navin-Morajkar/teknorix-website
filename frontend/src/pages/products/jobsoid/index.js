import Header from "../../../components/Header/Header";
import ContainerLeft from "../../../components/ContainerLeft/ContainerLeft"; 
import ContainerRight from "../../../components/ContainerRight/ContainerRight";
import Style from "@/components/SixCards/SixCards.module.css";
import SixCards from "@/components/SixCards/SixCards";
export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=Jobsoid"
  );
  const headerData = await headerResponse.json(); 
  const productResponse = await fetch(
    "http://13.233.214.226:1337/api/products-cards?populate=*&filters[Page][$eq]=JobsoidPage"
  );
  
  const productData = await productResponse.json(); 
  const  productIntroResponse = await fetch(
    "http://13.233.214.226:1337/api/product-intros?populate=*&filters[Page][$eq]=JobsoidPage"
  );
  
  const productIntroData = await productIntroResponse.json(); 
 
  const advantageResponse = await fetch(
    "http://13.233.214.226:1337/api/advantages?populate=*&filters[Page][$eq]=JobsoidPage"
  );
  const advantageData = await advantageResponse.json();
  return {
    props: {
      headerData: headerData.data,
      productData:productData.data,
      advantageData:advantageData.data,
      productIntroData:productIntroData.data
    },
  };
}
export default function Home({ headerData,productData,advantageData,productIntroData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };
  return (
    <div> 
      {/* <Sidebar /> */}
      <Header data={getDataBySortOrder(headerData, 0)} />
      <ContainerLeft  data={getDataBySortOrder(productIntroData,1)} /> 
      <Header data={getDataBySortOrder(headerData, 1)} />
      <ContainerLeft  data={getDataBySortOrder(productData,1)} /> 
      <ContainerRight  data={getDataBySortOrder(productData,2)} /> 
      <ContainerLeft  data={getDataBySortOrder(productData,3)} /> 
      <Header data={getDataBySortOrder(headerData, 2)} />
      <div className={Style.parent}>
          
          <SixCards data={getDataBySortOrder(advantageData ,1)} />
          <SixCards data={getDataBySortOrder(advantageData ,2)} />
          <SixCards data={getDataBySortOrder(advantageData ,3)} />
      </div>
      <div className={Style.parent}>
          
          <SixCards data={getDataBySortOrder(advantageData ,4)} />
          <SixCards data={getDataBySortOrder(advantageData ,5)} />
          <SixCards data={getDataBySortOrder(advantageData ,6)} />
      </div>
    </div>
  )
}
