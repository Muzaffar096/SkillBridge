import Button from "./Button";
import Title from "./SectionTitle";
import PropTypes from "prop-types";
import testmonials from "../data/testmonial.json";

function Testmonial() {
  return (
    <div className=" container mx-auto">
      <div
        className="flex flex-col lg:flex-row lg:items-center"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <Title
          title="Our Testmonials"
          subTitle="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        />
        <Button
          label="View All"
          type="button"
          styles="border border-[#F1F1F3] bg-[#FCFCFD] rounded-[8px] py-[14px] px-[24px] font-[500] text-[16px] text-[262626] w-[130px] lg:ms-[200px] mt-6 lg:mt-0  hover:bg-[#eaeaeb] transition ease-in-out duration-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] my-[70px]">
        {testmonials.map((testmony) => {
          return (
            <div
              key={testmony.id}
              className="bg-[#FFF] rounded-[8px] benefit-card"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="p-[15px] lg:p-[30px]">
                <span className="text-[15px] text-[#4C4C4D] font-[400]">
                  {testmony.testimony}
                </span>
              </div>
              <div className="border border-[#F1F1F3] bg-[#FCFCFD] p-[15px] lg:p-[30px] rounded-bl-[8px] rounded-br-[8px] flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <img
                    src={testmony.profile}
                    alt={testmony.profileAlt}
                    aria-label="lazy"
                    decoding="async"
                  />
                  <span className="font-[600] text-[15px] text-[#333]">
                    {testmony.profileName}
                  </span>
                </div>
                <Button
                  label="Read Full Story"
                  type="button"
                  styles="py-[14px] px-[18px] lg:py-[18px] lg:px-[24px] border border-[#F1F1F3] bg-[#F7F7F8] rounded-[8px] text-[15px] font-[500] text-[#262626] hover:bg-[#eaeaeb] transition ease-in-out duration-500"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testmonial;
