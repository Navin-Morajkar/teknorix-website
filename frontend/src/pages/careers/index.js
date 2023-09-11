import HeaderTest from "@/components/HeaderTest/HeaderTest";
import { useState, useEffect } from "react";

export default function index() {

  const [headerData, setHeaderData] = useState([])
  useEffect(() => {
    makeApiCall("http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=careersPage", setHeaderData);
    //http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=homePage
    //http://13.233.214.226:1337/api/headers?populate[headerImage][fields][0]=name&populate[headerImage][fields][1]=url&populate[bodyImage][fields][1]=url&filters[page][$eq]=homePage

  }, [])

  const makeApiCall = (url, setFunction) => {

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("API Response:", data);
        setFunction(data.data);
      })
  }

  const getDataBySortOrder = (sortOrder) => {
    return headerData.find((item) => item.attributes.SortOrder === sortOrder);
  };

  return (
    <div>
      <h2>Careers Page</h2>
      <HeaderTest data={getDataBySortOrder(0)} />
      <HeaderTest data={getDataBySortOrder(1)} />
    </div>
  )
}