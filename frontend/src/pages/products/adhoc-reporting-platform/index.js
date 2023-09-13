import Header from "../../../components/Header/Header";
import ContainerLeft from "../../../components/ContainerLeft/ContainerLeft"; 
import ContainerRight from "../../../components/ContainerRight/ContainerRight";
import Style from "@/components/SixCards/SixCards.module.css";
import SixCards from "@/components/SixCards/SixCards";
import TechStack from "@/components/TechStack/TechStack";
export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=AdhocReportingPlatformPage"
  );
  const headerData = await headerResponse.json(); 
  const productResponse = await fetch(
    "http://13.233.214.226:1337/api/products-cards?populate=*&filters[Page][$eq]=AdhocReportingPlatformPage"
  );
  
  const productData = await productResponse.json(); 
  const  productIntroResponse = await fetch(
    "http://13.233.214.226:1337/api/product-intros?populate=*&filters[Page][$eq]=adhocReportingPlatformPage"
  );
  
  const productIntroData = await productIntroResponse.json(); 
  const advantageResponse = await fetch(
    "http://13.233.214.226:1337/api/advantages?populate=*&filters[Page][$eq]=adhocReportingPlatformPage"
  );
  const advantageData = await advantageResponse.json();
  const importanceResponse = await fetch(
    "http://13.233.214.226:1337/api/product-importances?populate=*&pagination[start]=0&pagination[limit]=100"
  );
  const importanceData = await importanceResponse.json();

  return {
    props: {
      headerData: headerData.data,
      productData:productData.data,
      advantageData:advantageData.data,
      productIntroData:productIntroData.data,
      importanceData: importanceData.data
    },
  };
}
export default function Home({ headerData,productData,productIntroData,advantageData,importanceData}) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder); 
   
  }; 
  const filterTechnologyByType = (data, type) => {
    return data.filter((item) => item.attributes.Type === type);
  };

  const filteredAdhocReportingPlatform = filterTechnologyByType(importanceData, "AdhocReportingPlatform");

  return (
    <div> 
      <Header data={getDataBySortOrder(headerData, 0)} />
      <ContainerLeft  data={getDataBySortOrder(productIntroData,3)} />
      <Header data={getDataBySortOrder(headerData, 1)} />
       <div className={Style.child}>
        {filteredAdhocReportingPlatform.map((technology) => (
          <TechStack key={technology.id} data={technology} />
        ))}
      </div>
     
      <Header data={getDataBySortOrder(headerData, 2)} />
      <ContainerLeft  data={getDataBySortOrder(productData,1)} /> 
      <ContainerRight  data={getDataBySortOrder(productData,2)} /> 
      <ContainerLeft  data={getDataBySortOrder(productData,3)} /> 
      <Header data={getDataBySortOrder(headerData, 3)} />
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
   
  );
}

