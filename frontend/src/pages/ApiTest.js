import Container from "@/components/Container/Container";
import HeaderTest from "@/components/HeaderTest/HeaderTest";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import Styles from '../components/SixCards/SixCards.module.css'
import { Button } from "antd";
//This is like index.js
//So we call the api call here and pass the data down or sort

export default function index() {

    const [headerData, setHeaderData] = useState([])
    const [qualityData, setQualityData] = useState([])

    useEffect(() => {
        makeApiCall("http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=HomePage", setHeaderData);
        makeApiCall("http://13.233.214.226:1337/api/qualities?populate[image][fields][0]=name&populate[image][fields][1]=url&filters[Page][$eq]=HomePage", setQualityData);
        //http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=HomePage
        //http://13.233.214.226:1337/api/headers?populate[headerImage][fields][0]=name&populate[headerImage][fields][1]=url&populate[bodyImage][fields][1]=url&filters[page][$eq]=homePage

    }, [])

    const makeApiCall = async (url, setFunction) => {

        await fetch(url)
          .then((response) => {            
            return response.json();
          })
          .then((data) => {
            //console.log("API Response:", data);
            setFunction(data.data);
          })
    }
    
    const getDataBySortOrder = (data, sortOrder) => {
        return data.find((item) => item.attributes.SortOrder === sortOrder);
    };
      
    return (
        <div>
            
            {/* <Sidebar />           */}
            <HeaderTest data={getDataBySortOrder(headerData, 0)} />
            
            <div className={Styles.parent}>
                <Container data={getDataBySortOrder(qualityData, 1)}/>
                <Container data={getDataBySortOrder(qualityData, 2)}/>
                <Container data={getDataBySortOrder(qualityData, 3)}/>
            </div>

            <Button 
                href="/services" 
                type="primary" 
                styles={"backgroudColor: #4d94e4;"}
                shape="round"
                size="large" >
                    Learn More about our services
            </Button>
          

            <h1 className="text-center text-6xl">Our Unique 3U's towards your success</h1>

            <div className={Styles.parent}>
                <Container data={getDataBySortOrder(qualityData, 4)}/>
                <Container data={getDataBySortOrder(qualityData, 5)}/>
                <Container data={getDataBySortOrder(qualityData, 6)}/>
            </div>

            <h1 className="text-center text-6xl">Our Expertise</h1>

            <HeaderTest data={getDataBySortOrder(headerData, 1)} />
            
        </div>
    )
}