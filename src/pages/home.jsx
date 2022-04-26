import {
  Hero,
  Feature,
  Payment,
  Section1,
  Section2,
  Section3,
} from "../components";

export default function App() {
  return (
    <>
      <Hero />
      <Feature />
      <Payment />
      <>
        <Section1 />
        <Section2 />
        <Section3 />
      </>
    </>
  );
}
