import Header from "../../components/header/header";
import { Container } from "postcss";
import Container_left from "../../components/container_left/container_left";
import Container_right from "../../components/container_right/container_right";
import Want_to_Learn_More_form from "../../components/Want_to_Learn_More_form/Want_to_Learn_More_form"

export default function index() {
  return (
    <div>
      <Header entryId={3} />
      <Container_left entryId={1} />
      <Container_right entryId={2} />
      <Container_left entryId={3} />
      <Want_to_Learn_More_form />
    </div>
  );
}
