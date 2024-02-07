import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Social({
  abstract,
  abstractAlt,
  flashIcon,
  flashIconAlt,
  subSocialTitle,
  socialNtitle,
  socialText,
  socialTitle,
  socialImg,
  socialAlt,
}) {
  const brands = [
    {
      image: "../../public/logos/zapier.svg",
      imageAlt: "zapierLogo",
    },
    {
      image: "../../public/logos/spotify.svg",
      imageAlt: "spotifyLogo",
    },
    {
      image: "../../public/logos/zoom.svg",
      imageAlt: "zoomLogo",
    },
    {
      image: "../../public/logos/amazon.svg",
      imageAlt: "amazonLogo",
    },
    {
      image: "../../public/logos/adobe.svg",
      imageAlt: "adobeLogo",
    },
    {
      image: "../../public/logos/notion.svg",
      imageAlt: "notionLogo",
    },
    {
      image: "../../public/logos/netflix.svg",
      imageAlt: "netflixLogo",
    },
  ];

  return (
    <div className="container mx-auto flex justify-center mt-[100px]">
      <div>
        <div className="flex justify-center" data-aos="fade-right">
          <div className="flex items-center border border-[#F1F1F3] rounded-[11px] bg-[#FCFCFD] py-2 md:py-3.5 px-[10px] md:px-[30px] relative">
            <img
              src={abstract}
              alt={abstractAlt}
              className="absolute top-[-15px] left-[-15px] md:top-[-25px] md:left-[-25px]"
            />
            <div className="bg-[#FFF4E5] p-3.5 rounded-[6px] me-4">
              <img src={flashIcon} alt={flashIconAlt} />
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
          {brands.map((brand) => {
            return (
              <img
                src={brand.image}
                alt={brand.imageAlt}
                key={brand.imageAlt}
                aria-label="lazy"
                decoding="async"
              />
            );
          })}
        </div>
        <div data-aos="flip-right" data-aos-duration="1500">
          <img
            src={socialImg}
            alt={socialAlt}
            aria-label="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}

Social.propTypes = {
  abstract: PropTypes.string.isRequired,
  abstractAlt: PropTypes.string.isRequired,
  flashIcon: PropTypes.string.isRequired,
  flashIconAlt: PropTypes.string.isRequired,
  socialTitle: PropTypes.string.isRequired,
  subSocialTitle: PropTypes.string.isRequired,
  socialNtitle: PropTypes.string.isRequired,
  socialText: PropTypes.string.isRequired,
  socialImg: PropTypes.string.isRequired,
  socialAlt: PropTypes.string.isRequired,
};

export default Social;
