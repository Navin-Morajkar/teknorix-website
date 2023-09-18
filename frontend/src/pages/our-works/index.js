import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import ContainerLeft from "@/components/ContainerLeft/ContainerLeft";
import Style from "@/components/SixCards/SixCards.module.css";
import ContainerRight from "@/components/ContainerRight/ContainerRight";
import WantToLearnMore from "@/components/WantToLearnMoreForm/WantToLearnMoreForm";

export async function getServerSideProps() {
  const headerResponse = await fetch(
    "http://13.233.214.226:1337/api/headers?populate=*&filters[page][$eq]=OurWorksPage"
  );
  const headerData = await headerResponse.json();

  const portfolioResponse = await fetch(
    "http://13.233.214.226:1337/api/our-works?populate[image][fields][1]=url"
  );
  const portfolioData = await portfolioResponse.json();

  return {
    props: {
      headerData: headerData.data,
      portfolioData: portfolioData.data,
    },
  };
}

export default function Home({ headerData, portfolioData }) {
  const getDataBySortOrder = (data, sortOrder) => {
    return data.find((item) => item.attributes.SortOrder === sortOrder);
  };

  return (
    <div>
      <Header data={getDataBySortOrder(headerData, 0)} />

      {portfolioData.map((item) => (
        <ContainerLeft key={item.SortOrder} data={item} />
      ))}
    </div>
  );
}
