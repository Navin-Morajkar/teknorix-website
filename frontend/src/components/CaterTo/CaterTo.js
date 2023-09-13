// CaterTo.js

import React, { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Styles from "@/components/SixCards/SixCards.module.css";
import Container from "@/components/Container/Container";

function CaterTo() {
  const [headerData, setHeaderData] = useState(null);
  const [serviceVectorData, setServiceVectorData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const headerResponse = await fetch(
          "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ProductStrategyPage"
        );
        const headerData = await headerResponse.json();

        const serviceVectorResponse = await fetch(
          "http://13.233.214.226:1337/api/service-page-vectors?populate=*&pagination[start]=0&pagination[limit]=100"
        );
        const serviceVectorData = await serviceVectorResponse.json();

        setHeaderData(headerData.data);
        setServiceVectorData(serviceVectorData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  const filterImageByType = (data, type) => {
    return data.filter((item) => item.attributes.Type === type);
  };

  const filteredSvg = filterImageByType(serviceVectorData, "CaterTo");

  return (
    <div>
      {headerData && <Header data={getDataBySortOrder(headerData, 1)} />}
      <div className={Styles.child}>
        {filteredSvg.map((image) => (
          <Container key={image.id} data={image} />
        ))}
      </div>
    </div>
  );
}

export default CaterTo;
