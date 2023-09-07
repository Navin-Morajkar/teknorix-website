import Header from "../../components/Header/Header";
import { Container } from "postcss";
import ContainerLeft from "../../components/ContainerLeft/ContainerLeft";
import ContainerRight from "../../components/ContainerRight/ContainerRight";
import WantToLearnMoreform from "../../components/WantToLearnMoreForm/WantToLearnMoreForm"
import Sidebar from "@/components/Sidebar/Sidebar";

export default function index() {
  return (
    <div> 
      <Sidebar />
      <Header entryId={3} />
      <ContainerLeft entryId={1} />
      <ContainerRight entryId={2} />           
      <ContainerLeft entryId={3} />
      <WantToLearnMoreform />
    </div>
  );
}
