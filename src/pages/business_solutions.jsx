import {
  Hero,
  Card1,
  Card2,
  Card3,
  Slider,
} from "../components/business_solutions";
import Container from "../components/container";

export default function Index() {
  return (
    <div>
      <Hero />
      <Container>
        <Card1 />
        <Card2 />
        <Card3 />
        <Slider />
      </Container>
    </div>
  );
}
