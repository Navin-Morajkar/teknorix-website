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


export async function getServerSideProps() {
    const headerResponse = await fetch(
      "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=AboutUsPage"
    );
    const headerData = await headerResponse.json();
  
    const employeeResponse = await fetch(
      "http://13.233.214.226:1337/api/employees?populate=*&pagination[start]=0&pagination[limit]=100"
    );
    const employeeData = await employeeResponse.json();
  
    return {
      props: {
        headerData: headerData.data,
        employeeData: employeeData.data,
      },
    };
  }
  

export default function Home({ headerData, employeeData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  const filterEmployeesByType = (data, type) => {
    return data.filter((item) => item.attributes.EmployeeType === type);
  };

  const filteredEmployees = filterEmployeesByType(employeeData, "Employee");

  return (
    <div>
      <Sidebar />
      <Header data={getDataBySortOrder(headerData, 0)} />
      <div style={{ marginLeft: "20%", paddingLeft: "1%", height: "150vh" }}>
      <div className={Style.parent}>
          {[7, 8, 9].map((entryId) => (
            <SixCards key={entryId} entryId={entryId} />
          ))}
        </div>

        <div className={Style.parent}>
          {[10, 11, 12].map((entryId) => (
            <SixCards key={entryId} entryId={entryId} />
          ))}
        </div>
        <Header data={getDataBySortOrder(headerData, 1)} />
        <h2 className={Style.textcenter}>Our Team</h2>
        <div className={Style.parent}>
          <ProfileImage data={getDataBySortOrder(employeeData, 1)} />
          <ProfileImage data={getDataBySortOrder(employeeData, 2)} />
        </div>
        <div className={Style.child}>
          {filteredEmployees.map((employee) => (
            <EmployeeImage key={employee.id} data={employee} />
          ))}
        </div>
        <div className={Style.parent}>
          <OurWork />
          <OurJobs entryId={4} />
          <OurJobs entryId={5} />
        </div>
        <QuoteForm />
        <Footer />
      </div>
    </div>
  );
}


