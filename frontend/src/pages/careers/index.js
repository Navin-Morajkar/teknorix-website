import Collage from "@/components/Collage/Collage";
import Header from "@/components/Header/Header";
import Style from "@/components/SixCards/SixCards.module.css";
import SixCards from "@/components/SixCards/SixCards";
import TestimonialsCarousel from "@/components/TestimonialsCarousel/TestimonialsCarousel";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=CareersPage"
  );
  const headerData = await headerResponse.json();
  const advantageResponse = await fetch(
    "http://13.233.214.226:1337/api/advantages?populate=*&filters[Page][$eq]=CareerPage"
  );
  const advantageData = await advantageResponse.json();

  return {
    props: {
      headerData: headerData.data,
      advantageData: advantageData.data,
    },
  };
}

export default function Home({ headerData, advantageData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  return (
    <div>
      <Header data={getDataBySortOrder(headerData, 0)} />
      <div className={Style.parent}>
        <SixCards data={getDataBySortOrder(advantageData, 1)} />
        <SixCards data={getDataBySortOrder(advantageData, 2)} />
        <SixCards data={getDataBySortOrder(advantageData, 3)} />
      </div>
      <div className={Style.parent}>
        <SixCards data={getDataBySortOrder(advantageData, 4)} />
        <SixCards data={getDataBySortOrder(advantageData, 5)} />
        <SixCards data={getDataBySortOrder(advantageData, 6)} />
      </div>
      <Header data={getDataBySortOrder(headerData, 1)} />
      <Collage />
      <TestimonialsCarousel />
      <Header data={getDataBySortOrder(headerData, 2)} />
      {/* <div
        id="jw-root-container"
        class="theme-default"
        j-layout="stacked"
        j-group="auto"
        j-source="Website"
        j-show-dept="true"
        j-show-div="false"
        j-show-loc="true"
        j-show-func="true"
        j-domain="teknorix-500"
      ></div>
      <script
        type="text/javascript"
        src="https://static.jobsoid.com/web-integration/jobsoid.js"
      ></script>  */}
       <div className={Style.parent}>
          
          <SixCards data={getDataBySortOrder(advantageData,7)} />
          <SixCards data={getDataBySortOrder(advantageData,8)} />
          <SixCards data={getDataBySortOrder(advantageData,9)} />
      </div>
      <div className={Style.parent}>
          
          <SixCards data={getDataBySortOrder(advantageData,10)} />
          <SixCards data={getDataBySortOrder(advantageData,11)} />
          <SixCards data={getDataBySortOrder(advantageData,12)} />
      </div>
    </div>
  );
}
