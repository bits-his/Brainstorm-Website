import React from "react";
import "./trends.css";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { VscRemoteExplorer } from "react-icons/vsc";

export default function Trends() {
  return (
    <div className="tabs-container">
      <div className="container tabs">
      <Tab.Container id="left-tabs-example" defaultActiveKey="WD" transition={false} >
        <Nav variant="underline" as="ul" className="tabs-navs" fill bsPrefix>
          <Nav.Item as='li'>
            <Nav.Link eventKey="WD" className="tab-link">
              <VscRemoteExplorer />
              Web
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link eventKey="SD" className='tab-link'>
            <VscRemoteExplorer />
              Software
              </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link eventKey="ML" className="tab-link">
              <VscRemoteExplorer />
              Machine
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link eventKey="AI" className="tab-link">
              <VscRemoteExplorer />
              Artificial
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link eventKey="CT" className="tab-link">
              <VscRemoteExplorer />
              Cooperate
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link eventKey="BC" className="tab-link">
              <VscRemoteExplorer />
              Blockchain
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="WD">
            Web Development ipsum dolor sit amet consectetur adipisicing elit.
            Iure obcaecati possimus dolore mollitia voluptatem velit repellendus
            rem dignissimos consequatur unde. Alias atque assumenda voluptatem
            cum neque iure veniam, animi nam! 
          </Tab.Pane>
          <Tab.Pane eventKey="SD">
            Software development ipsum dolor sit amet consectetur adipisicing elit.
            Iure obcaecati possimus dolore mollitia voluptatem velit repellendus
            rem dignissimos consequatur unde. Alias atque assumenda voluptatem
            cum neque iure veniam, animi nam! 
          </Tab.Pane>
          <Tab.Pane eventKey="AI">
           Aitificial Intelegence ipsum dolor sit amet consectetur adipisicing elit.
            Iure obcaecati possimus dolore mollitia voluptatem velit repellendus
            rem dignissimos consequatur unde. Alias atque assumenda voluptatem
            cum neque iure veniam, animi nam!
          </Tab.Pane>
          <Tab.Pane eventKey="ML">
            Machine Learning ipsum dolor sit amet consectetur adipisicing elit.
            Iure obcaecati possimus dolore mollitia voluptatem velit repellendus
            rem dignissimos consequatur unde. Alias atque assumenda voluptatem
            cum neque iure veniam, animi nam!
          </Tab.Pane>
          <Tab.Pane eventKey="BC">
            Blockchain ipsum dolor sit amet consectetur adipisicing elit.
            Iure obcaecati possimus dolore mollitia voluptatem velit repellendus
            rem dignissimos consequatur unde. Alias atque assumenda voluptatem
            cum neque iure veniam, animi nam!.
          </Tab.Pane>
          <Tab.Pane eventKey="CT">
            Cooperate ipsum dolor sit amet consectetur adipisicing elit.
            Iure obcaecati possimus dolore mollitia voluptatem velit repellendus
            rem dignissimos consequatur unde. Alias atque assumenda voluptatem
            cum neque iure veniam, animi nam! .
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      </div>
    </div>
  );
}
