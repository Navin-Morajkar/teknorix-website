import Header from "../../../components/Header/Header";
import ContainerLeft from "../../../components/ContainerLeft/ContainerLeft";
import Style from "@/components/SixCards/SixCards.module.css";
import SixCards from "@/components/SixCards/SixCards";
export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=Jobsoid"
  );
  const headerData = await headerResponse.json(); 
  const productResponse = await fetch(
    "http://13.233.214.226:1337/api/products?populate=*&filters[Page][$eq]=ProductsPage"
  );
  const productData = await productResponse.json();
  const recruitmentPlatformResponse = await fetch(
    "http://13.233.214.226:1337/api/recruitment-platforms?populate=*&filters[Page][$eq]=Jobsoid"
  );
  const recruitmentPlatformData = await recruitmentPlatformResponse.json();
  

  return {
    props: {
      headerData: headerData.data,
      productData:productData.data,
      recruitmentPlatformData:recruitmentPlatformData.data
    },
  };
}
export default function Home({ headerData,productData,recruitmentPlatformData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };
  return (
    <div> 
      {/* <Sidebar /> */}
      <Header data={getDataBySortOrder(headerData, 0)} />
      <ContainerLeft  data={getDataBySortOrder(productData,1)} /> 
      <Header data={getDataBySortOrder(headerData, 1)} />
      <Header data={getDataBySortOrder(headerData, 2)} />
      <div className={Style.parent}>
          
          <SixCards data={getDataBySortOrder(recruitmentPlatformData,1)} />
          <SixCards data={getDataBySortOrder(recruitmentPlatformData,2)} />
          <SixCards data={getDataBySortOrder(recruitmentPlatformData,3)} />
      </div>
      <div className={Style.parent}>
          
          <SixCards data={getDataBySortOrder(recruitmentPlatformData,4)} />
          <SixCards data={getDataBySortOrder(recruitmentPlatformData,5)} />
          <SixCards data={getDataBySortOrder(recruitmentPlatformData,6)} />
      </div>
    </div>
  )
}
