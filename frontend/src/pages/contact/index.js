import Header from "@/components/Header/Header";
import ImageCard from "@/components/ImageCard/ImageCard";
import Contact from "@/components/WantToLearnMoreForm/emailjs.js";
import { useEffect } from "react";
import { useSidebar } from "@/components/SidebarContext";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ContactUsPage"
  );

  const textResponse = await fetch(
    "http://13.233.214.226:1337/api/contact-uses?populate=*"
  );
  const headerData = await headerResponse.json();
  const textData = await textResponse.json();

  const sidebarDataResponse = await fetch(
    "http://13.233.214.226:1337/api/sidebar-contents?filters[page][$eq]=ContactPage"
  );
  const sidebarData = await sidebarDataResponse.json();

  return {
    props: {
      headerData: headerData.data,
      textData: textData.data,
      sidebarData: sidebarData.data,
    },
  };
}

export default function Home({ headerData, textData, sidebarData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  const { setSidebarContent } = useSidebar();

  //Update the Sidebar content when you navigate to this page
  useEffect(() => {
    setSidebarContent({
      title: sidebarData[0].attributes.title,
      subtitle: sidebarData[0].attributes.subtitle,
      description: sidebarData[0].attributes.description,
    });
  }, []);
 

  return (
    <div>
      <Header data={getDataBySortOrder(headerData, 0)} />

      {/* <QuoteForm /> */}

      
      <div className="text-center mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0 mt-4">
          <ImageCard data={getDataBySortOrder(textData, 1)} />
          <ImageCard data={getDataBySortOrder(textData, 2)} />
          <ImageCard data={getDataBySortOrder(textData, 3)} />
          <ImageCard data={getDataBySortOrder(textData, 4)} />
        </div>

     
     
      </div>
      <Contact />
    </div>
  );
}
