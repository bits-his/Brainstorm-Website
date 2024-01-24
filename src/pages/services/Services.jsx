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
        details="At brainstorm, we are dedicated to providing innovative and tailored software solutions to meet the unique needs of your business. Our team of skilled professionals is committed to delivering high-quality services that empower your organization to thrive in the digital landscape."
      />
      <CardContainer />
      <Technologies />
    </>
  );
}
