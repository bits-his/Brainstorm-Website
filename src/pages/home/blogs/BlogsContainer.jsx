import "./blogs.css";
import BlogCard from "./BlogCard";
import blog1 from "../../../assets/blog/Bootcamp 1.jpg";
import blog2 from "../../../assets/blog/BUK Students Visit.jpg";
import blog3 from "../../../assets/blog/DSC_0211.JPG";
import Scroll from "../../../Components/scroll/Scroll";
import { Link } from "react-router-dom";

export default function BlogsContainer({refi}) {
  return (
    <div id="blog" ref={refi}>
      <div className="story">
        {/* <div className="top-text">
          <h3>Our recent stories</h3>
        </div> */}
        <Scroll title={"Our recent stories"} page={'blog'}/>
        <div className="container">
          <div className="row">
            <BlogCard img={blog1} 
              title={"Free Javascript Bootcamp at Bayero University Kano"} 
              id={1}
              description={`On the 9th - 10th January 2024, Brainstorm IT Solutions organized a 
              JavaScript Boot camp at the Department of Software Engineering Bayero University Kano. 
              With the rapidly evolving technology landscape, we believe that equipping students with 
              practical programming skills is essential for their future success.`} 
              date={"November 16, 2023"} 
            />
            <BlogCard img={blog2} 
              title={"Computer Science Department BUK Students visits Brainstorm"} 
              description={`The Students of Computer Science Department of 
              Bayero University Kano (BUK) paid an educational visit to Brainstorm Innovation Hub to get some .`} 
              date={"November 16, 2023"} 
              id={2}
            />
            <BlogCard img={blog3} 
            title={"2 Days Workshop with Ministry of Finance Kano"} 
            description={`Brainstorm organise a 2 days workshop for the ministry of finance, 
            budget and planning in which the of the platforms developed by brainstorm were lucnched`} 
            date={"November 16, 2023"} 
            id={3}
            />
            
          </div>
           <div className="find-more">
           <Link to='blog' >
            Blog
          </Link>
           </div>
        </div>

        {/* <div className='container mt-4 mb-4'>
            <div className='row mb-3'>
              <h2 className='mb-0'>Success Stories</h2>
              <p className='underline shift'></p>
            </div>
            <div className='row'>
              <div className="flex-container">
                <div className="item1">
                  <div className='headline-stories'>
                    <div className='stories-head'>Software Products Development for Global Webpages</div>
                    <p className='underline'></p>
                  </div>
                  <div className='headline-description'>
                    <p className='stories-category'>Product Development</p>
                    <HiArrowNarrowRight size={20} color="white" fontWeight={600} />
                  </div>
                  <div className='headline-hover-content'>
                    <div>
                      <p>React</p>
                      <p>React Native</p>
                      <p>3D Designing</p>
                    </div>
                    <button className="animated-arrow-button">
                      Find more <span className="animated-arrow"><HiArrowNarrowRight size={20} color="black" fontWeight={600} /></span>
                    </button>
                  </div>

                </div>
                <div className="item2">
                  <div className='headline-stories'>
                    <div className='stories-head'>Creating and Securing Dynamic Online Platforms (Web 3)</div>
                    <p className='underline'></p>
                  </div>
                  <div className='headline-description'>
                    <p className='stories-category'>Secure Programming</p>
                    <HiArrowNarrowRight size={20} color="white" fontWeight={600} />
                  </div>
                  <div className='headline-hover-content'>
                    <div>
                      <p>Blockchain</p>
                    </div>
                    <button className="animated-arrow-button">
                      Find more <span className="animated-arrow"><HiArrowNarrowRight size={20} color="black" fontWeight={600} /></span>
                    </button>
                  </div>
                </div>
                <div className="item3">
                  <div className='headline-stories'>
                    <div className='stories-head'> Managing Robust Backends</div>
                    <p className='underline'></p>
                  </div>
                  <div className='headline-description'>
                    <p className='stories-category'>Service</p>
                    <HiArrowNarrowRight size={20} color="white" fontWeight={600} />
                  </div>
                  <div className='headline-hover-content'>
                    <div>
                      <p>Node js</p>
                      <p>Kubernets</p>
                    </div>
                    <button className="animated-arrow-button">
                      Find more <span className="animated-arrow"><HiArrowNarrowRight size={20} color="black" fontWeight={600} /></span>
                    </button>
                  </div>
                </div>
                <div className="item4">
                  <div className='headline-stories'>
                    <div className='stories-head'>Providing Hosting Services</div>
                    <p className='underline'></p>
                  </div>
                  <div className='headline-description'>
                    <p className='stories-category'>Service</p>
                    <HiArrowNarrowRight size={20} color="white" fontWeight={600} />
                  </div>
                  <div className='headline-hover-content'>
                    <div>
                      <p>Cloud Computing</p>
                    </div>
                    <button className="animated-arrow-button">
                      Find more <span className="animated-arrow"><HiArrowNarrowRight size={20} color="black" fontWeight={600} /></span>
                    </button>
                  </div>
                </div>
                <div className="item5">
                  <div className='headline-stories'>
                    <div className='stories-head'>Utilizing Core Technologies for Efficient Servicing and Cybersecurity</div>
                    <p className='underline'></p>
                  </div>
                  <div className='headline-description'>
                    <p className='stories-category'>Software Testing</p>
                  </div>
                  <div className='headline-hover-content'>
                    <div>
                      <p>Web Pentest</p>
                      <p>Application Pentest</p>
                    </div>
                    <button className="animated-arrow-button">
                      Find more <span className="animated-arrow"><HiArrowNarrowRight size={20} color="black" fontWeight={600} /></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div> */}
      </div>
    </div>
  );
}
