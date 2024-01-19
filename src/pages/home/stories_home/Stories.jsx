import { HiArrowNarrowRight } from "react-icons/hi";
import './stories.css'

function Stories() {
  return (
    <div>
        <div className='container mt-4 mb-4'>
            <div className='row mb-3'>
              <h2 className='mb-0'>Success Stories</h2>
              <p className='underline shift'></p>
            </div>
            <div className='row'>
              <div class="flex-container">
                <div class="item1">
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
                <div class="item2">
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
                <div class="item3">
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
                <div class="item4">
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
                <div class="item5">
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
        </div>
    </div>
  )
}

export default Stories