import React from "react";
import './trends.css'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function Trends() {
  return (
   <div className="tabs-container">
     <div className="container tabs">
      <Tabs
        defaultActiveKey="BD"
        transition={false}
        id="trends"
        fill
        className="mb-3"
      >
        <Tab eventKey="BD" title="Big Data">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse
          deleniti molestias maxime exercitationem debitis consequuntur
          obcaecati dignissimos earum, accusantium alias repudiandae. Maxime
          quibusdam cumque expedita ipsum enim corrupti. Voluptate?
        </Tab>
        <Tab eventKey="AI" title="Airtificial Inteligence">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse
          deleniti molestias maxime exercitationem debitis consequuntur
          obcaecati dignissimos earum, accusantium alias repudiandae. Maxime
          quibusdam cumque expedita ipsum enim corrupti. Voluptate?ile
        </Tab>
        <Tab eventKey="ML" title="Machine Learning" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse
          deleniti molestias maxime exercitationem debitis consequuntur
          obcaecati dignissimos earum, accusantium alias repudiandae. Maxime
          quibusdam cumque expedita ipsum enim corrupti. Voluptate?act
        </Tab>
        <Tab eventKey="WD" title="Web Development">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse
          deleniti molestias maxime exercitationem debitis consequuntur
          obcaecati dignissimos earum, accusantium alias repudiandae. Maxime
          quibusdam cumque expedita ipsum enim corrupti. Voluptate?act
        </Tab>
        <Tab eventKey="SD" title="Software development">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse
          deleniti molestias maxime exercitationem debitis consequuntur
          obcaecati dignissimos earum, accusantium alias repudiandae. Maxime
          quibusdam cumque expedita ipsum enim corrupti. Voluptate?act
        </Tab>
        <Tab eventKey="BC" title="Blockchain">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse
          deleniti molestias maxime exercitationem debitis consequuntur
          obcaecati dignissimos earum, accusantium alias repudiandae. Maxime
          quibusdam cumque expedita ipsum enim corrupti. Voluptate?act
        </Tab>
      </Tabs>
    </div>
   </div>
  );
}
