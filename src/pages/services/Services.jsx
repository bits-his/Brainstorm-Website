import "./services.css";
import CustomCardContainer from "./rendered/CustomCardContainer";
import CardContainer from './CardContainer'
import Parallex from '../../Components/parallex/Parallex'

const Services = () => {
  return (
    <>
     <Parallex page='Services' details='
     Elevate your digital presence with Brainstorm 
     IT Solutions! Experience innovative Web3-powered 
     development for software, web, and apps, ensuring 
     top security and global impact. ' />
     <CardContainer />
     <CustomCardContainer />
    </>
  );
}

export default Services;
