import "./services.css";
// import Hero from '../../Components/Hero/Hero'
import CardContainer from "./CardContainer";
import Parallex from "../../Components/parallex/Parallex";
import Technologies from "./technologies/Technologies";

export default function Services() {
  return (
    <>
      {/* <Hero page='Services'/>
      <h2 className='mt-5 pt-5'>WHAT WE OFFER</h2> */}
      <Parallex
        page="Services"
        details="Brainstorm offers a wide range of services for professionals,
helping millions of people everyday "
      />
      <CardContainer />
      <Technologies />
    </>
  );
}
