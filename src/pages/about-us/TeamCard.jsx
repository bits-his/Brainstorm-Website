import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoMailUnreadOutline } from "react-icons/io5";

export default function TeamCard({
  pic,
  name,
  role,
  ceo,
  delay,
  last,
  mail,
  twitter,
  linkedin,
}) {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay={`${delay}`}
        className="col-12 col-sm-6 col-md-4 col-lg-3 hmm"
      >
        <div className="team-card cards">
          <div className="connect">
            <img src={pic} alt="team" loading="lazy" />
            <div className="social">
              <ul>
                <a href={mail}>
                  <li>
                    <IoMdMail />
                  </li>
                </a>
                <a href={twitter} target="blank">
                  <li>
                    <BsTwitterX />

                  </li>
                </a>
                <a href={linkedin} target="blank">
                  <li>
                    <FaLinkedin />
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="info">
            <h4>
              {name}{" "}
              {last ? (
                <span>
                  <br /> <br />{" "}
                </span>
              ) : (
                ""
              )}
            </h4>
            <p className="role">
              {" "}
              {role} <br />
              {ceo}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
