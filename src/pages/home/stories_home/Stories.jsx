// import { HiArrowNarrowRight } from "react-icons/hi";
import "./stories.css";
import blog1 from "../../../assets/img/blog1-5-510x400.jpg";
import blog2 from "../../../assets/img/blog2-5-510x400.jpg";
import blog3 from "../../../assets/img/blog3-5-510x400.jpg";
import { Link } from "react-router-dom";
export default function Stories() {
  return (
    <div>
      <div className="story">
        <div className="top-text">
          <h3>Our recent story</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            harum earum vel autem, reiciendis iusto quidem.
          </p>
        </div>
        <div className="row">
          <div className="home-blog col-lg-4 col-md-6 col-sm-12">
            <div className="home-blog-img">
              <img src={blog1} alt="blog1" />
            </div>
            <div className="home-blog-hero">
              <ul>
                <li>
                  <Link to="/">Home /</Link>
                </li>

                <li>November 16, 2019</li>
              </ul>
            </div>
            <div className="home-blog-content">
              <h3>
                <Link to="/">
                  Software Products Development for Global Webpages
                </Link>
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elitconsectetur adipisicing elit...
              </p>
              <Link to="/">
                Read more <span>+</span>
              </Link>
            </div>
          </div>
          <div className="home-blog col-lg-4 col-md-6 col-sm-12">
            <div className="home-blog-img">
              <img src={blog2} alt="blog1" />
            </div>
            <div className="home-blog-hero">
              <ul>
                <li>
                  <Link to="/">Home /</Link>
                </li>

                <li>November 16, 2019</li>
              </ul>
            </div>
            <div className="home-blog-content">
              <h3>
                <Link to="/">Managing Robust Backends</Link>
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elitconsectetur adipisicing elit...
              </p>
              <Link to="/">
                Read more <span>+</span>
              </Link>
            </div>
          </div>
          <div className="home-blog col-lg-4 col-md-6 col-sm-12">
            <div className="home-blog-img">
              <img src={blog3} alt="blog1" />
            </div>
            <div className="home-blog-hero">
              <ul>
                <li>
                  <Link to="/">Home /</Link>
                </li>

                <li>November 16, 2019</li>
              </ul>
            </div>
            <div className="home-blog-content">
              <h3>
                <Link to="/">
                  Creating and Securing Dynamic Online Platforms (Web 3)
                </Link>
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elitconsectetur adipisicing elit...
              </p>
              <Link to="/">
                Read more <span>+</span>
              </Link>
            </div>
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
