import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import EmployeeImage from "@/components/EmployeeImage/EmployeeImage";
import Style from "@/components/SixCards/SixCards.module.css";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Footer from "@/components/Footer/Footer";
import SixCards from "@/components/SixCards/SixCards";
import WantToLearnMore from "@/components/WantToLearnMoreForm/WantToLearnMoreForm";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=AboutUsPage"
  );
  const headerData = await headerResponse.json();

  const employeeResponse = await fetch(
    "http://13.233.214.226:1337/api/employees?populate=*&pagination[start]=0&pagination[limit]=100&sort[0]=id&sort[1]=SortOrder"
  );
  const employeeData = await employeeResponse.json();

  const advantageResponse = await fetch(
    "http://13.233.214.226:1337/api/advantages?populate=*&filters[Page][$eq]=AboutUsPage"
  );
  const advantageData = await advantageResponse.json();
  const ourJobsDataResponse = await fetch(
    "http://13.233.214.226:1337/api/our-works?populate=*&filters[Page][$eq]=AboutUsPage"
  );
  const ourJobsData = await ourJobsDataResponse.json();
  return {
    props: {
      headerData: headerData.data,
      employeeData: employeeData.data,
      advantageData: advantageData.data,
      ourJobsData:ourJobsData.data
    },
  };
}

export default function Home({ headerData, employeeData, advantageData,ourJobsData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  const filterEmployeesByType = (data, type) => {
    return data.filter((item) => item.attributes.EmployeeType === type);
  };

  const filteredEmployees = filterEmployeesByType(employeeData, "Employee");

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

      <div className="text-center mt-4">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold">Our Team</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 mt-4 lg:mt-8">

        <ProfileImage data={getDataBySortOrder(employeeData, 1)} />
        <ProfileImage data={getDataBySortOrder(employeeData, 2)} />
      </div>
      <div className="flex flex-wrap flex-row">
        {filteredEmployees.map((employee) => (
          <EmployeeImage key={employee.SortOrder} data={employee} />
        ))}
     </div>
    </div>
      <div className="container mx-auto">
  <div className="flex flex-wrap -mx-0">
    <div className="w-full md:w-1/2 lg:w-1/3 ">
      <OurWork />
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 ">
      <OurJobs data={getDataBySortOrder(ourJobsData, 3)} />
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3  ">
      <OurJobs data={getDataBySortOrder(ourJobsData, 8)} />
    </div>
  </div>
</div>
      <QuoteForm />
      <div className={Style.parent}>
        <OurWork />
        <OurJobs entryId={4} />
        <OurJobs entryId={5} />
      </div>
      <WantToLearnMore />
    </div>
  );
}
