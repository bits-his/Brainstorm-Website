import React from "react";
import "./trends.css";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import wd from "../../img/WD.svg";
import ct from "../../img/SD.jpg";
import ai from "../../img/AI.jpg";
import ml from "../../img/ML.jpg";
import bc from "../../img/BC.jpg";
import sd from "../../img/CT.jpg";

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
                <img src={wd} alt='web' />
                Web Development
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="SD" className="tab-link">
              <img src={sd} alt='sd' />
                Software Development
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="ML" className="tab-link">
              <img src={ml} alt='ml' />
                Machine Learning
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="AI" className="tab-link">
              <img src={ai} alt='ai' />
                Artificial Intelegence
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="CT" className="tab-link">
              <img src={ct} alt='ct' />
                Cooperate Training
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="BC" className="tab-link">
              <img src={bc} alt='web' />
                Blockchain Technology
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="WD" className="pane-content">
              <p>
                Blur the line between the digital and real worlds to make
                your site as amazing as possible 
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="SD" className="pane-content">
            <p>
                Create your custom software base on your needs
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="AI" className="pane-content">
            <p>
                Blur the line between the digital and real worlds to make
                regular tasks and activities easier, safer, and more engaging.
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="ML" className="pane-content">
            <p>
                Blur the line between the digital and real worlds to make
                regular tasks and activities easier, safer, and more engaging.
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="BC" className="pane-content">
            <p>
                Blur the line between the digital and real worlds to make
                regular tasks and activities easier, safer, and more engaging.
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="CT" className="pane-content">
                  <p>
                Blur the line between the digital and real worlds to make
                regular tasks and activities easier, safer, and more engaging.
              </p>
              <div className="pane-services">
                <h4>Service We Offers</h4>
                <div className="underline-small"></div>
                <ul>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
                  </li>
                  <li>
                    <h5>The Service</h5>
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
