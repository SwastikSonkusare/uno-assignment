import avatar from "../assets/Avatar.png";
import saveIcon from "../assets/save.svg";
import facebookIcon from "../assets/Facebook - Dark.svg";
import googleIcon from "../assets/Google - Dark.svg";
import skypeIcon from "../assets/skype-dark.svg";
import twitterIcon from "../assets/Twitter - Dark.svg";
import youtubeIcon from "../assets/YouTube - Dark.svg";
import githubIcon from "../assets/Github - Dark.svg";
import instagramIcon from "../assets/Instagram - Dark.svg";
import mailIcon from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import identification from "../assets/identification.svg";
import location from "../assets/location-marker.svg";
import gender from "../assets/user.svg";
import funding from "../assets/currency-dollar.svg";
import infoCircle from "../assets/currency-dollar.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import logoIcon from "../assets/logo.svg";
import building from "../assets/office-building.svg";

const IMAGES = {
  logoIcon,
  moon,
  sun,
  avatar,
  saveIcon,
  facebookIcon,
  googleIcon,
  skypeIcon,
  twitterIcon,
  youtubeIcon,
  githubIcon,
  instagramIcon,
  mailIcon,
  phone,
  identification,
  location,
  gender,
  funding,
  infoCircle,
  building,
};

export default IMAGES;

export const userDetails = [
  {
    id: 1,
    icon: IMAGES.mailIcon,
    text: "View email address",
    text2: "Business",
  },
  {
    id: 2,
    icon: IMAGES.building,
    text: "View HQ number",
    text2: "HQ",
  },
  {
    id: 3,
    icon: IMAGES.phone,
    text: "View mobile address",
    text2: "Mobile",
  },
  {
    id: 4,
    icon: IMAGES.identification,
    text: "Seniority",
    text2: "C-Level",
  },
  {
    id: 5,
    icon: IMAGES.location,
    text: "location",
    text2: "New York, NY, USA",
  },
  {
    id: 6,
    icon: IMAGES.gender,
    text: "Gender",
    text2: "Male",
  },
  {
    id: 7,
    icon: IMAGES.funding,
    text: "Funding",
    text2: "$8M",
  },
  {
    id: 8,
    icon: IMAGES.infoCircle,
    text: "Skills",
    text2:
      "Microsoft Office, Microsoft Excel, Leadership, Microsoft Word, Research, Powerpoint, Public, Speaking, Social Media, Marketing",
  },
];
