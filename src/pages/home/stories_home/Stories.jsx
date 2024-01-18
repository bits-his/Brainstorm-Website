import React from 'react'
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
                  </div>
                  <div className='headline-hover-content'>
                    <p>React</p>
                    <p>React Native</p>
                    <p>3D Designing</p>
                  </div>
                </div>
                <div class="item2">
                  <div className='headline-stories'>
                    <div className='stories-head'>Creating and Securing Dynamic Online Platforms (Web 3)</div>
                    <p className='underline'></p>
                  </div>
                  <div className='headline-description'>
                    <p className='stories-category'>Secure Programming</p>
                  </div>
                  <div className='headline-hover-content'>
                    <p>Blockchain</p>
                  </div>
                </div>
                <div class="item3">
                  <div className='headline-stories'>
                    <div className='stories-head'> Managing Robust Backends</div>
                    <p className='underline'></p>
                  </div>
                  <div className='headline-description'>
                    <p className='stories-category'>Service</p>
                  </div>
                  <div className='headline-hover-content'>
                    <p>Node js</p>
                    <p>Kubernets</p>
                  </div>  
                </div>  
                <div class="item4">
                  <div className='headline-stories'>
                    <div className='stories-head'>Providing Hosting Services</div>
                    <p className='underline'></p>
                  </div>
                  <div className='headline-description'>
                    <p className='stories-category'>Service</p>
                  </div>
                  <div className='headline-hover-content'>
                    <p>Cloud Computing</p>
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
                    <p>Web Pentest</p>
                    <p>Application Pentest</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Stories