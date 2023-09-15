import BlogPreview from "@/components/BlogPreview/BlogPreview";
import Header from "@/components/Header/Header";
import { useState, useEffect } from "react";

export default function index() {
  const [headerData, setHeaderData] = useState([]);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    makeApiCall(
      "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=blogPage",
      setHeaderData
    ),
    makeApiCall(
      "http://13.233.214.226:1337/api/blogs?populate=*",
      setBlogData
    );
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

      <BlogPreview data={getDataBySortOrder(blogData, 1)}/>
      <BlogPreview data={getDataBySortOrder(blogData, 2)}/>
    </div>
  );
}
