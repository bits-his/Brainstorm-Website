import React, { useState } from "react";
import "./tech.css";
import Logo from "../../assets/logos/logo.png";
import { BsCloudCheck } from "react-icons/bs";
import { BsEnvelopeX } from "react-icons/bs";
import { Label, FormGroup, Input } from "reactstrap";

const Tech = () => {
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with Full Name:", fullName);
  };

  return (
    <div className="form-container">
      <div
        className="header"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{}}>
          <img
            src={Logo}
            alt="Brainstorm"
            className="logo"
            fetchpriority="high"
            width={150}
          />
        </div>
        <h2 style={{ width: "100%" }}>Brainstorm Tech Masterclass Series</h2>
      </div>

      <div className="description">
        <p>
          Unlock exceptional value by enhancing business performance with the
          latest technologies, fostering business development, and expanding
          your client base. Create new pathways for service offerings to drive
          organizational success and stay ahead in a rapidly changing market.
          Gain practical insights from industry experts, network with peers and
          potential partners, and become part of the Brainstorm Tech Community.
        </p>
        <p>
          Upon completing the 3-day masterclass series, you'll receive a
          certificate of participation, demonstrating your commitment to
          innovation and upskilling.
        </p>
      </div>
      <hr />
      <p>
        kubrah3431@gmail.com <string>Switch account</string>
      </p>
      <BsEnvelopeX />
      <br />
      <BsCloudCheck />

      <hr />
      <p>*indicates required question</p>
      <form onSubmit={handleSubmit} className="masterclass-form">
        <div className="form-group">
          <Label htmlFor="fullName">Full Name:</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">Email:</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">Phone Number:</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">Linkedin Profile (optional):</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">Organiztion/Buisness Name:</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">Job Title:</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">Industry/Sector:</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">Company Size (opational):</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">
            How did you hear about the Brainstorm Masterclass?:
          </Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">
            What motivates you to attend this masterclass?:
          </Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">
            Are you interested in any specific area (Al, Cybersecurity, Cloud
            Computing)?:
          </Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <Label htmlFor="fullName">Additional information:</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">
            Do you have any specific goals or expectations for attending this
            event?
          </Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">
            Are you part of any associaations,cooperatives, or groups? if yes,
            please specify:
          </Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="fullName">Consent and Contact:</Label>
          <FormGroup check>
            <Input type="checkbox" />
            <Label check>
              I consent to receiving follow-up communications fromthe event
              organizers regarding their service offerings.
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>
              I agree to share my contact information with event partners and
              sponsors.
            </Label>
          </FormGroup>
        </div>
        <hr />
        <div className="form-group">
          <Label htmlFor="fullName"></Label>
          <FormGroup check>
            <Input type="checkbox" />
            <Label check>
              I understand that i will receive a certificate of participation
              upon completing the masterclass series.:
            </Label>
          </FormGroup>

          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>
              I am interested in learning more about the Brainstorm commmunity
              and potential membership opportunities.
            </Label>
          </FormGroup>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tech;
