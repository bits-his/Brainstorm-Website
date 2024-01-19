import React from "react";
import "./trends.css";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { VscRemoteExplorer } from "react-icons/vsc";

export default function Trends() {
  return (
    <div className="tabs-container">
      {/* <div className="container tabs"> */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" transition='false'>
        <Nav variant="underline" as="ul" fill >
          <Nav.Item>
            <Nav.Link eventKey="first" className="flex">
              <VscRemoteExplorer />
              Web
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Software</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="first" className="flex">
              <VscRemoteExplorer />
              Machine
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="first" className="flex">
              <VscRemoteExplorer />
              Artificial
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="first" className="flex">
              <VscRemoteExplorer />
              Cooperate
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="first" className="flex">
              <VscRemoteExplorer />
              Blockchain
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            First tab Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iure obcaecati possimus dolore mollitia voluptatem velit repellendus
            rem dignissimos consequatur unde. Alias atque assumenda voluptatem
            cum neque iure veniam, animi nam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste, soluta! Facilis, cupiditate
            voluptatibus, odit deleniti repellendus inventore, perspiciatis quod
            cum autem molestiae aliquam voluptatum neque provident quasi iusto!
            Necessitatibus, quod? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptas hic adipisci vel alias, veritatis odio
            cum optio quod vitae. Debitis hic nesciunt at dolorem quas dicta ex
            magnam! Cumque, et.
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            Second tab Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iure obcaecati possimus dolore mollitia voluptatem velit repellendus
            rem dignissimos consequatur unde. Alias atque assumenda voluptatem
            cum neque iure veniam, animi nam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste, soluta! Facilis, cupiditate
            voluptatibus, odit deleniti repellendus inventore, perspiciatis quod
            cum autem molestiae aliquam voluptatum neque provident quasi iusto!
            Necessitatibus, quod? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptas hic adipisci vel alias, veritatis odio
            cum optio quod vitae. Debitis hic nesciunt at dolorem quas dicta ex
            magnam! Cumque, et.
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      {/* </div> */}
    </div>
  );
}
