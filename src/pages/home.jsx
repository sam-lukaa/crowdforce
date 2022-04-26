import {
  Hero,
  Feature,
  Payment,
  Section1,
  Section2,
  Section3,
} from "../components";
import Container from "../components/container";
import Img from "../library/Frame.png";

export default function App() {
  return (
    <>
      <Hero />
      <Feature />
      <Payment />
      <Container>
        <Section1 />
        <Section2 />
        <Section3 />
      </Container>
      <img src={Img} alt="" />
    </>
  );
}
