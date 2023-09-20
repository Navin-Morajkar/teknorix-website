import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import Styles from "@/components/SixCards/SixCards.module.css";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Container from "@/components/Container/Container";
import CaterTo from "@/components/CaterTo/CaterTo";
import ImageCard from "@/components/ImageCard/ImageCard";
import Contact from "@/components/WantToLearnMoreForm/emailjs.js";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ContactUsPage"
  );

  const textResponse = await fetch(
    "http://13.233.214.226:1337/api/contact-uses?populate=*"
  );
  const headerData = await headerResponse.json();
  const textData = await textResponse.json();
  return {
    props: {
      headerData: headerData.data,
      textData: textData.data,
    },
  };
}

export default function Home({ headerData, textData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };


 

  return (
    <div>
      <Header data={getDataBySortOrder(headerData, 0)} />

      {/* <QuoteForm /> */}

      <Contact />
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
