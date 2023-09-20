import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import { useState, useEffect } from "react";
import Styles from "../components/SixCards/SixCards.module.css";
import { Button } from "antd";
import Achievement from "@/components/Achievement/achievement";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";
import WantToLearnMore from "@/components/WantToLearnMoreForm/WantToLearnMoreForm";
import Contact from "@/components/WantToLearnMoreForm/emailjs";
import { useSidebar } from "../components/SidebarContext";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=HomePage"
  );
  const qualityResponse = await fetch(
    "http://13.233.214.226:1337/api/qualities?populate=*&filters[page][$eq]=HomePage"
  );
  const expertiseDataResponse = await fetch(
    "http://13.233.214.226:1337/api/our-expertises?populate[image][fields][0]=name&populate[image][fields][1]=url"
  );
  const achievementResponse = await fetch(
    "http://13.233.214.226:1337/api/achievements?populate[image][fields][1]=url"
  );
  const ourJobsDataResponse = await fetch(
    "http://13.233.214.226:1337/api/our-works?populate=*&filters[Page][$eq]=AboutUsPage"
  );
  const sidebarDataResponse = await fetch(
    "http://13.233.214.226:1337/api/sidebar-contents?filters[page][$eq]=homePage"
  );

  const headerData = await headerResponse.json();
  const qualityData = await qualityResponse.json();
  const expertiseData = await expertiseDataResponse.json();
  const achievementData = await achievementResponse.json();
  const ourJobsData = await ourJobsDataResponse.json();
  const sidebarData = await sidebarDataResponse.json();

  return {
    props: {
      headerData: headerData.data,
      qualityData: qualityData.data,
      expertiseData: expertiseData.data,
      achievementData: achievementData.data,
      ourJobsData: ourJobsData.data,
      sidebarData: sidebarData.data,
    },
  };
}
export default function Home({
  headerData,
  qualityData,
  expertiseData,
  achievementData,
  ourJobsData,
  sidebarData,
}) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };
  const filterAchievementByType = (data, type) => {
    return data.filter((item) => item.attributes.Type === type);
  };

  const filteredWeb = filterAchievementByType(achievementData, "MainPage");

  // console.log(sidebarData[0].attributes.title);
  // console.log(typeof(sidebarData));

  //Navin's code
  const { sidebarContent, setSidebarContent } = useSidebar();

  // Update the Sidebar content when you navigate to this page
  useEffect(() => {
    setSidebarContent({
      title: sidebarData.attributes.title,
      subtitle: sidebarData.attributes.subtitle,
      description: sidebarData.attributes.description,
    });
  }, []);

  // End of Navin's code


  return (
    <div className="bg-gray-100">
      <div className="bg-yellow-300"> 
      <Header   data={getDataBySortOrder(headerData, 0)} />

      <div className={Styles.parent}>
        <Container data={getDataBySortOrder(qualityData, 1)} />
        <Container data={getDataBySortOrder(qualityData, 2)} />
        <Container data={getDataBySortOrder(qualityData, 3)} />
      </div>
      <div className="text-center">
        <Button
          href="/services"
          type="primary"
          styles={{ backgroudColor: "#4d94e4;" }}
          shape="round"
          size="large"
        >
          Learn More about our services
        </Button>
      </div>

        <h1 className="text-center text-6xl">
          Our Unique 3U's towards your success
        </h1>

        <div className={Styles.parent}>
          <Container data={getDataBySortOrder(qualityData, 4)} />
          <Container data={getDataBySortOrder(qualityData, 5)} />
          <Container data={getDataBySortOrder(qualityData, 6)} />
        </div>
      </div>
      <h1 className="text-center text-6xl">Our Expertise</h1>

      <div className={Styles.parent}>
        <Container data={getDataBySortOrder(expertiseData, 1)} />
        <Container data={getDataBySortOrder(expertiseData, 2)} />
        <Container data={getDataBySortOrder(expertiseData, 3)} />
      </div>

      <Achievement />
      <Header data={getDataBySortOrder(headerData, 1)} />

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
      
   
      <Contact />
    </div>
  );
}
