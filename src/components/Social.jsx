import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import abstract from "../../public/icons/Abstract-Line.svg";
import flash from "../../public/icons/flash.svg";
import zapier from "../../public/logos/zapier.svg";
import spotify from "../../public/logos/spotify.svg";
import zoom from "../../public/logos/zoom.svg";
import amazon from "../../public/logos/amazon.svg";
import adobe from "../../public/logos/adobe.svg";
import notion from "../../public/logos/notion.svg";
import netflix from "../../public/logos/netflix.svg";
import socialImg from "../../public/man-and-girl.png";

function Social({ subSocialTitle, socialNtitle, socialText, socialTitle }) {
  return (
    <div className="container mx-auto flex justify-center mt-[100px]">
      <div>
        <div className="flex justify-center" data-aos="fade-right">
          <div className="flex items-center border border-[#F1F1F3] rounded-[11px] bg-[#FCFCFD] py-2 md:py-3.5 px-[10px] md:px-[30px] relative">
            <img
              src={abstract}
              alt="abstractAlt"
              className="absolute top-[-15px] left-[-15px] md:top-[-25px] md:left-[-25px]"
            />
            <div className="bg-[#FFF4E5] p-3.5 rounded-[6px] me-4">
              <img src={flash} alt="flashIconAlt" />
            </div>
            <span className="font-[600] noBreak text-[15px] md:text-[30px] lg:text-[38px]">
              <span className="text-[#FF9500]">{subSocialTitle}</span>
              <span className=""> {socialTitle}</span>
            </span>
          </div>
        </div>
        <div
          className="mt-5 md:mt-0"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <p className="text-[28px] font-[500] text-[#262626] text-center mb-0 pt-4 pb-1">
            {socialNtitle}
          </p>
          <p className="text-[16px] font-[400] text-[#262626] text-center">
            {socialText}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 mt-[50px]">
          <NavLink to="./courses">
            <Button
              label="Explore Courses"
              type="button"
              styles="font-[600] text-[16px] py-[18px] px-[24px] rounded-[8px] bg-[#FF9500] text-white hover:bg-[#ff9500f3] transition ease-in-out duration-200"
            />
          </NavLink>
          <NavLink to="./pricing">
            <Button
              label="View Pricing"
              type="button"
              styles="font-[600] text-[16px] py-[18px] px-[24px] rounded-[8px] bg-[#fff] border border-[#F1F1F3]"
            />
          </NavLink>
        </div>
        <div className="border border-[#F1F1F3] bg-[#FCFCFD] rounded-[12px] flex justify-center gap-[60px] items-center px-[30px] py-[50px] my-[90px] flex-wrap  brand">
          <img src={zapier} alt="Zapier Logo" />
          <img src={spotify} alt="Spotify Logo" />
          <img src={zoom} alt="Zoom Logo" />
          <img src={amazon} alt="Amazon Logo" />
          <img src={adobe} alt="Adobe Logo" />
          <img src={notion} alt="Notion Logo" />
          <img src={netflix} alt="Netflix Logo" />
        </div>
        <div data-aos="flip-right" data-aos-duration="1500">
          <img
            src={socialImg}
            alt="socialAlt"
            aria-label="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}

Social.propTypes = {
  socialTitle: PropTypes.string.isRequired,
  subSocialTitle: PropTypes.string.isRequired,
  socialNtitle: PropTypes.string.isRequired,
  socialText: PropTypes.string.isRequired,
};

export default Social;
