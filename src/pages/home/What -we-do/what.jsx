import "./what.css";
import "../../..";
import Img from "../../../assets/1-3-5.png";
import Img2 from "../../../assets/2-2-5.png";
import { GoDotFill } from "react-icons/go";
import { BiCheckDouble } from "react-icons/bi";
import { Link } from "react-router-dom";
function what() {
  return (
    <>
    <div className="bg-light">
      <div className="container mt-5 d-flex p-4 mb-5 m-5 what">
      <div className="what-img m-3" >
          <img src={Img} alt="" className="img-fluid" />
        </div>
        <div className="what-text p-3">
          <h3>
          Make your business more competitive and  <br />sustainable.
          </h3>
          
          <span className="span">
            Holistic Management for Your Cloud or On-Premises Infrastructure and
            Applications.
          </span>
          <ul>
            <li>
              <BiCheckDouble className="icon" />
              
Influencing Sales
            </li>
            <li>
              <BiCheckDouble className="icon" />
              Generating Insights
            </li>
            <li>
              <BiCheckDouble className="icon" />
              Boosting Operations
            </li>
            <li>
              <BiCheckDouble className="icon" />
              security
            </li>
            
          </ul>
         
        </div>
        
      </div>
      <div className="container mt-5 d-flex p-4 mb-5 m-5 what">
      
        <div className="what-text p-3">
          <h3>
          Make your business more competitive and  <br />sustainable.
          </h3>
          
          <span className="span">
            Holistic Management for Your Cloud or On-Premises Infrastructure and
            Applications.
          </span>
          <ul>
            <li>
              <BiCheckDouble className="icon" />
              consulting
            </li>
            <li>
              <BiCheckDouble className="icon" />
              implementation
            </li>
            <li>
              <BiCheckDouble className="icon" />
              Engaging Customer
            </li>
            <li>
              <BiCheckDouble className="icon" />
              security
            </li>
            
          </ul>
         
        </div>
        <div className="what-img m-3" >
          <img src={Img2} alt="" className="img-fluid" />
        </div>
        
      </div>
      </div>
    </>
  );
}

export default what;





