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
          <div
            className={
              theme === "light"
                ? "user__contact-save"
                : "user__contact-save dark"
            }
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66558 8.23439C6.59178 8.15799 6.5035 8.09704 6.4059 8.05511C6.3083 8.01319 6.20332 7.99112 6.0971 7.99019C5.99087 7.98927 5.88553 8.00951 5.78721 8.04974C5.6889 8.08996 5.59957 8.14936 5.52446 8.22448C5.44935 8.29959 5.38994 8.38891 5.34972 8.48723C5.30949 8.58555 5.28925 8.69089 5.29018 8.79712C5.2911 8.90334 5.31317 9.00831 5.35509 9.10592C5.39702 9.20352 5.45797 9.2918 5.53438 9.36559L7.93438 11.7656C8.0844 11.9156 8.28784 11.9998 8.49998 11.9998C8.71211 11.9998 8.91555 11.9156 9.06557 11.7656L11.4656 9.36559C11.6113 9.21471 11.6919 9.01263 11.6901 8.80287C11.6883 8.59312 11.6042 8.39247 11.4558 8.24414C11.3075 8.09581 11.1069 8.01168 10.8971 8.00986C10.6873 8.00803 10.4853 8.08867 10.3344 8.23439L9.29998 9.26879V4.79999H13.3C13.7243 4.79999 14.1313 4.96857 14.4313 5.26862C14.7314 5.56868 14.9 5.97565 14.9 6.39999V12C14.9 12.4243 14.7314 12.8313 14.4313 13.1314C14.1313 13.4314 13.7243 13.6 13.3 13.6H3.69998C3.27563 13.6 2.86866 13.4314 2.5686 13.1314C2.26855 12.8313 2.09998 12.4243 2.09998 12V6.39999C2.09998 5.97565 2.26855 5.56868 2.5686 5.26862C2.86866 4.96857 3.27563 4.79999 3.69998 4.79999H7.69998V9.26879L6.66558 8.23439V8.23439ZM7.69998 3.19999C7.69998 2.98782 7.78426 2.78434 7.93429 2.63431C8.08432 2.48428 8.2878 2.39999 8.49998 2.39999C8.71215 2.39999 8.91563 2.48428 9.06566 2.63431C9.21569 2.78434 9.29998 2.98782 9.29998 3.19999V4.79999H7.69998V3.19999Z"
                fill={theme === "light" ? "white" : "#6C2BD9"}
              />
            </svg>
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
