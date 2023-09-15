import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import Styles from "../components/SixCards/SixCards.module.css";
import { Button } from "antd";
import Footer from "@/components/Footer/Footer";
import Achievement from "@/components/Achievement/achievement";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import OurWork from "@/components/OurWork/OurWork";
import OurJobs from "@/components/OurJobs/OurJobs";

export default function index() {
  const [headerData, setHeaderData] = useState([]);
  const [qualityData, setQualityData] = useState([]);
  const [expertiseData, setExpertiseData] = useState([]);
  const [achievementData, setAchievementData] = useState([]);

  useEffect(() => {
    makeApiCall(
      "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=HomePage",
      setHeaderData
    );
    makeApiCall(
      "http://13.233.214.226:1337/api/qualities?populate[image][fields][0]=name&populate[image][fields][1]=url&filters[Page][$eq]=HomePage",
      setQualityData
    );
    makeApiCall(
      "http://13.233.214.226:1337/api/our-expertises?populate[image][fields][0]=name&populate[image][fields][1]=url",
      setExpertiseData
    );
    makeApiCall(
      "http://13.233.214.226:1337/api/achievements?populate[image][fields][1]=url",
      setAchievementData
    );
    //http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=HomePage
    //http://13.233.214.226:1337/api/headers?populate[headerImage][fields][0]=name&populate[headerImage][fields][1]=url&populate[bodyImage][fields][1]=url&filters[page][$eq]=homePage
  }, []);

  const makeApiCall = async (url, setFunction) => {
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("API Response:", data);
        setFunction(data.data);
      });
  };

  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  return (
    <div>
      <Header data={getDataBySortOrder(headerData, 0)} />

      <div className={Styles.parent}>
        <Container data={getDataBySortOrder(qualityData, 1)} />
        <Container data={getDataBySortOrder(qualityData, 2)} />
        <Container data={getDataBySortOrder(qualityData, 3)} />
      </div>
      <div className="text-center" >
      <Button
        href="/services"
        type="primary"
        styles={{ backgroudColor: "#4d94e4;" }}
        shape="round"
        size="large">
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

      <h1 className="text-center text-6xl">Our Expertise</h1>

      <div className={Styles.parent}>
        <Container data={getDataBySortOrder(expertiseData, 1)} />
        <Container data={getDataBySortOrder(expertiseData, 2)} />
        <Container data={getDataBySortOrder(expertiseData, 3)} />
      </div>

      <Achievement data={getDataBySortOrder(achievementData, 1)} />
      <Header data={getDataBySortOrder(headerData, 1)} />


      <div className={Styles.parent}>
        <OurWork />
        <OurJobs entryId={4} />
        <OurJobs entryId={5} />
      </div>
      <QuoteForm />
      
    </div>
  );
}
