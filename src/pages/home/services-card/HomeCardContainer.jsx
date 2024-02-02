import React from 'react'
import Card from '../../services/Card'
import Scroll from '../../../Components/scroll/Scroll'
import WD from '../../services/img/WD.webp'
import CSD from '../../services/img/CSD.webp'
import CT from '../../services/img/CT.png'

export default function HomecardContainer() {
  return (
  <>
    <div className="row service-container">
     <Scroll page={'home'} title={'Our featured solutions'} span={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
      <Card
          heading="Website Development"
          describtion="Enhance your online presence with cutting-edge web applications. We specialize in creating dynamic and user-friendly web solutions that deliver seamless experiences across devices."
          img={WD}
        />
        <Card
          heading="Software Development"
          describtion="Empower your business with cutting-edge software solutions tailored to your unique needs. Our software development expertise ensures scalable and efficient solutions."
          img={CSD}
        />
        <Card
          heading="Co-operate Trainings"
          describtion="In addition to our development services, we offer corporate training programs designed to enhance the skills and capabilities of your team. From the latest technologies to industry best practices."
          img={CT}
        />
   </div>
  </>
  )
}
