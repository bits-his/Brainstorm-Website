import React from "react";
import "./trends.css";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { VscRemoteExplorer } from "react-icons/vsc";

export default function Trends() {
  return (
    <div className="tabs-container">
      <div className="container tabs">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="WD"
          transition={false}
        >
          <Nav variant="underline" as="ul" className="tabs-navs" pills fill bsPrefix>
            <Nav.Item as="li">
              <Nav.Link eventKey="WD" className="tab-link">
                <VscRemoteExplorer />
                Web Development
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="SD" className="tab-link">
                <VscRemoteExplorer />
                Software Development
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="ML" className="tab-link">
                <VscRemoteExplorer />
                Machine Learning
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="AI" className="tab-link">
                <VscRemoteExplorer />
                Artificial Intelegence
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="CT" className="tab-link">
                <VscRemoteExplorer />
                Cooperate Training
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="BC" className="tab-link">
                <VscRemoteExplorer />
                Blockchain Technology
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="WD" className="pane-content">
              <p>
                Blur the line between the digital and real worlds to make
                regular tasks and activities easier, safer, and more engaging.
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="SD">
            <p>
                Blur the line between the digital and real worlds to make
                regular tasks and activities easier, safer, and more engaging.
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="AI">
            <p>
                Blur the line between the digital and real worlds to make
                regular tasks and activities easier, safer, and more engaging.
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="ML">
            <p>
                Blur the line between the digital and real worlds to make
                regular tasks and activities easier, safer, and more engaging.
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="BC">
            <p>
                Blur the line between the digital and real worlds to make
                regular tasks and activities easier, safer, and more engaging.
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="CT">
            <p>
                Blur the line between the digital and real worlds to make
                regular tasks and activities easier, safer, and more engaging.
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                  <li>
                    <h5>the Service</h5>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}
