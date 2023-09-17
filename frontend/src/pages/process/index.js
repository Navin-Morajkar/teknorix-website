import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Footer from "@/components/Footer/Footer";
import SixCards from "@/components/SixCards/SixCards";
import FlowContainer from "@/components/FlowContainer/FlowContainer";
import WantToLearnMore from "@/components/WantToLearnMoreForm/WantToLearnMoreForm";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ProcessPage"
  );
  const headerData = await headerResponse.json();

  const advantageResponse = await fetch(
    "http://13.233.214.226:1337/api/advantages?populate=*&filters[Page][$eq]=ProcessPage"
  );
  const advantageData = await advantageResponse.json();

  const flowResponse = await fetch(
    "http://13.233.214.226:1337/api/flows?populate=*&filters[Page][$eq]=ProcessPage"
  );
  const flowData = await flowResponse.json();
  const ourJobsDataResponse = await fetch(
    "http://13.233.214.226:1337/api/our-services?populate=*&filters[Type][$eq]=CustomSoftwareDevelopment"
  );
  const ourJobsData = await ourJobsDataResponse.json();
  return {
    props: {
      headerData: headerData.data,
      advantageData: advantageData.data,
      flowData: flowData.data,
      ourJobsData:ourJobsData.data
    },
  };
}

export default function Home({ headerData, advantageData, flowData,ourJobsData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

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