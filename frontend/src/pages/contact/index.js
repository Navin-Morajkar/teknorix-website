import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import Styles from "@/components/SixCards/SixCards.module.css";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Container from "@/components/Container/Container";
import CaterTo from "@/components/CaterTo/CaterTo";
import ImageCard from "@/components/ImageCard/ImageCard";
import Contact from "@/components/WantToLearnMoreForm/emailjs";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=ContactUsPage"
  );

  const headerData = await headerResponse.json();
  return {
    props: {
      headerData: headerData.data,
    },
  };
}

export default function Home({ headerData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  const filterService = (data, type, sortOrder) => {
    return data.find(
      (item) =>
        item.attributes.Type === type && item.attributes.SortOrder === sortOrder
    );
  };

  const filterImageByType = (data, type) => {
    return data.filter((item) => item.attributes.Type === type);
  };

  return (
    <div>
      <Header data={getDataBySortOrder(headerData, 0)} />
      {/* <QuoteForm /> */}
      <Contact />
      <ImageCard />
    </div>
  );
}

// export default function index() {
//   return (
//     <div>
//       <h2>Contact Us</h2>
//       <ImageCard />
//     </div>
//   )
// }
