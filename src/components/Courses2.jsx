import Title from "./SectionTitle";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import tracks from "../data/course.json";
function Courses2() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <Title
          title="Our Courses"
          subTitle="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        />
        <Button
          label="View All"
          type="button"
          styles="border border-[#F1F1F3] bg-[#FCFCFD] rounded-[8px] py-[14px] px-[24px] font-[500] text-[16px] text-[262626] w-[130px] lg:ms-[200px] mt-6 lg:mt-0  hover:bg-[#eaeaeb] transition ease-in-out duration-500"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] my-[70px]">
        {tracks.map((track) => {
          return (
            <div
              key={track.id}
              className="bg-[#fff] border border-[#F1F1F3] rounded-[12px] p-[15px] md:p-[30px] course-card overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div>
                <div className="relative overflow-hidden rounded-[6px]">
                  <img
                    src={track.image}
                    alt={track.imageAlt}
                    className="imgScale w-full"
                    aria-label="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between py-[30px]">
                  <div className="flex items-center gap-3">
                    <div className="border border-[#F1F1F3] rounded-[12px] py-[10px] px-[16px]">
                      <span className="text-[16px] font-[400] text-[#4C4C4D]">
                        {track.Duration}
                      </span>
                    </div>
                    <div className="border border-[#F1F1F3] rounded-[12px] py-[10px] px-[16px]">
                      <span className="text-[16px] font-[400] text-[#4C4C4D]">
                        {track.Level}
                      </span>
                    </div>
                  </div>
                  <span className="font-[600] text-[16px] text-[#262626] pt-5 md:pt-0">
                    {track.Name}
                  </span>
                </div>
                <h4 className="font-[700] text-[20px] text-[#262626] pb-3">
                  {track.Track}
                </h4>
                <div className="pb-5">
                  <span className="font-[400] text-[14px] text-[#4C4C4D]">
                    {track.Descrption}
                  </span>
                </div>
                <div>
                  <NavLink to="./courses">
                    <Button
                      label="Get it Now"
                      type="button"
                      styles="border border-[#F1F1F3] rounded-[8px] bg-[#F7F7F8] w-[100%] py-[12px] font-[500] text-[15px] hover:bg-[#eaeaeb] transition ease-in-out duration-500"
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}



export default Courses2;
