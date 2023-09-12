import Header from "../../../components/Header/Header";
import ContainerLeft from "../../../components/ContainerLeft/ContainerLeft"; 
import ContainerRight from "../../../components/ContainerRight/ContainerRight";
export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ivueVideoPage"
  );
  const headerData = await headerResponse.json(); 
  const productResponse = await fetch(
    "http://13.233.214.226:1337/api/products-cards?populate=*&filters[Page][$eq]=IvueVideo"
  );
  
  const productData = await productResponse.json(); 
  const  productIntroResponse = await fetch(
    "http://13.233.214.226:1337/api/product-intros?populate=*&filters[Page][$eq]=ivueVideoPage"
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
export default function Home({ headerData,productData,productIntroData}) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };
  return (
    <div> 
      <Header data={getDataBySortOrder(headerData, 0)} />
      <ContainerLeft  data={getDataBySortOrder(productIntroData,2)} /> 
      <Header data={getDataBySortOrder(headerData, 1)} />
      <Header data={getDataBySortOrder(headerData, 2)} />
      <ContainerRight  data={getDataBySortOrder(productData,1)} /> 
      
    </div>
   
  );
}

