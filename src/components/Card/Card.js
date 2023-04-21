import React from "react";

import IMAGES from "../../assets";
import { userDetails } from "../../assets";

import "./Card.css";

const Card = ({ theme }) => {
  const socialMediaIcons = [
    IMAGES.facebookIcon,
    IMAGES.googleIcon,
    IMAGES.skypeIcon,
    IMAGES.twitterIcon,
    IMAGES.youtubeIcon,
    IMAGES.githubIcon,
    IMAGES.instagramIcon,
  ];

  return (
    <div className="card">
      <div className="user">
        <img src={IMAGES.avatar} alt="" />

        <div className="user__contact">
          <div className="user__contact-list">
            {socialMediaIcons.map((icon) => (
              <img src={icon} alt="" />
            ))}
          </div>
          <div className="user__contact-save">
            <img src={IMAGES.saveIcon} alt="" />
            <small>Save Contact</small>
          </div>
        </div>
      </div>
      <div className={theme === "light" ? "user__bio" : "user__bio dark"}>
        <h3>Jese Leos</h3>
        <span>CEO</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,.....
        </p>
      </div>

      <div className="user__details">
        {userDetails.map((userDetail) => (
          <div
            key={userDetail.id}
            className={
              theme === "light"
                ? "user__details-container"
                : "user__details-container dark"
            }
          >
            <div>
              <img src={userDetail.icon} alt="" />
              <h4>{userDetail.text}</h4>
            </div>
            <h4>{userDetail.text2}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
