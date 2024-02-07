import { useState } from "react";
import { Link } from "react-router-dom";
import PricingPlan from "../components/PricingPlan";
import items from "../data/faq.json";
import FAQItem from "../components/FAQItem";
import Testmonial from "../components/Testmonial";
import Courses2 from "../components/Courses2";
import Benefits from "../components/Benefits";
import Social from "../components/Social";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  const [isActive, setIsActive] = useState("monthly");
  let freePrice = 0;
  let proPrice = isActive === "monthly" ? 79 : 790;

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <Social
        abstract="../../public/icons/Abstract-Line.svg"
        abstractAlt="spark"
        flashIcon="../../public/icons/flash.svg"
        flashIconAlt="flash_icon"
        subSocialTitle="Unlock"
        socialTitle="Your Creative Potential"
        socialNtitle="With Online Design and Development Courses."
        socialText="Learn from Industry Experts and Enhance Your Skills."
        socialImg="../../public/man-and-girl.png"
        socialAlt="Social Img"
      />
      <Benefits />
      <Courses2 />
      <Testmonial />
      <div
        className="bg-light-970 p-3 container mx-auto gap-3 rounded-lg  m-auto mt-[50px] mb-[40px] flex items-center justify-between"
        data-aos="fade-left"
      >
        <div>
          <h1 className=" text-[30px] font-bold text-left">Our Pricing</h1>
          <p className=" text-[#899890] text-left">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem <br /> nibh et. Ac
            cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="flex h-12 justify-center">
          <button
            type="button"
            onClick={() => setIsActive("monthly")}
            className={` transition-colors py-3 px-5 rounded-md ${
              isActive === "monthly" ? "btn-primary bg-primary" : ""
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setIsActive("yearly")}
            className={` transition-colors py-3 px-5 rounded-md ${
              isActive === "yearly" ? "btn-primary bg-primary" : ""
            }`}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl p-5 text-center flex flex-col gap-[30px] lg:p-12 lg:flex-row container mx-auto m-auto mb-[90px] lg:mb-[120px]">
        <PricingPlan period={isActive} price={freePrice} type={"free"} />
        <PricingPlan period={isActive} price={proPrice} type={"pro"} />
      </div>
      <div className="rounded-xl bg-white p-6 mb-[50px] flex flex-col gap-x-20 justify-between lg:flex-row lg:p-8 xl:p-14">
        <div className="mb-10 lg:max-w-[450px]" data-aos="fade-up-right">
          <h2 className="title pb-2">Frequently Asked Questions</h2>
          <p className="text-dark-200 pb-5">
            Still you have any questions? Contact our Team via{" "}
            <Link to="mailto:support@skillbridge.com" className="underline">
              support@skillbridge.com
            </Link>
          </p>
          <button
            type="button"
            className="border py-[14px] px-5 rounded-md font-medium "
          >
            See All FAQ
          </button>
        </div>

        <div
          className="flex flex-col gap-y-5 w-fit m-auto lg:m-0"
          data-aos="fade-up-left"
        >
          {items.map((item) => {
            return (
              <FAQItem
                question={item.question}
                answer={item.answer}
                key={item.question}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
