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

  const filterService = (data, type, sortOrder) => {
    return data.find(
      (item) =>
        item.attributes.Type === type && item.attributes.SortOrder === sortOrder
    );
  };
  const filterImage = (data, type, sortOrder) => {
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
      <div className={Styles.parent}>
        <ImageCard data={getDataBySortOrder(textData, 1)} />
        <ImageCard data={getDataBySortOrder(textData, 2)} />
      </div>
      <div className={Styles.parent}>
        <ImageCard data={getDataBySortOrder(textData, 3)} />
        <ImageCard data={getDataBySortOrder(textData, 4)} />
      </div>
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
