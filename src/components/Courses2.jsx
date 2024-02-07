import Title from "./SectionTitle";
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Courses2() {

    const tracks = [
        {
            id: 1,
            image: "../../public/courses-1.jpg",
            imageAlt: "Image 1",
            Duration: "4 Weeks",
            Level: "Beginner",
            Name: "By John Smith",
            Track: "Web Design Fundamentals",
            Descrption: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
        },
        {
            id: 2,
            image: "../../public/courses-4.jpg",
            imageAlt: "Image 2",
            Duration: "6 Weeks",
            Level: "Intermediate",
            Name: "By Emily Johnson",
            Track: "UI/UX Design",
            Descrption: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
        },
        {
            id: 3,
            image: "../../public/courses-7.jpg",
            imageAlt: "Image 3",
            Duration: "8 Weeks",
            Level: "Intermediate",
            Name: "By David Brown",
            Track: "Mobile App Development",
            Descrption: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
        },
        {
            id: 4,
            image: "../../public/courses-10.jpg",
            imageAlt: "Image 4",
            Duration: "10 Weeks",
            Level: "Beginner",
            Name: "By Sarah Thompson",
            Track: "Graphic Design for Beginners",
            Descrption: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."
        },
        {
            id: 5,
            image: "../../public/courses-13.jpg",
            imageAlt: "Image 5",
            Duration: "10 Weeks",
            Level: "Intermediate",
            Name: "By Michael Adams",
            Track: "Front-End Web Development",
            Descrption: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
        },
        {
            id: 6,
            image: "../../public/courses-15.jpg",
            imageAlt: "Image 6",
            Duration: "6 Weeks",
            Level: "Advance",
            Name: "By Jennifer Wilson",
            Track: "Advanced JavaScript",
            Descrption: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."
        },
    ];

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
                {tracks.map(track => {
                    return (
                        <CoursesCard
                            key={track.id}
                            courseCard={track}
                        />
                    )
                })}
            </div>
        </div>
    )
}

function CoursesCard({
    courseCard
}) {

    const {
        image,
        imageAlt,
        Duration,
        Level,
        Name,
        Track,
        Descrption,
    } = courseCard

    return (
        <div>
            <div className="bg-[#fff] border border-[#F1F1F3] rounded-[12px] p-[15px] md:p-[30px] course-card overflow-hidden" data-aos="zoom-in" data-aos-duration="1500">
                <div>
                    <div className="relative overflow-hidden rounded-[6px]">
                        <img src={image} alt={imageAlt} className="imgScale" aria-label="lazy" decoding="async"/>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between py-[30px]">
                        <div className="flex items-center gap-3">
                            <div className="border border-[#F1F1F3] rounded-[12px] py-[10px] px-[16px]">
                                <span className="text-[16px] font-[400] text-[#4C4C4D]">{Duration}</span>
                            </div>
                            <div className="border border-[#F1F1F3] rounded-[12px] py-[10px] px-[16px]">
                                <span className="text-[16px] font-[400] text-[#4C4C4D]">{Level}</span>
                            </div>
                        </div>
                        <span className="font-[600] text-[16px] text-[#262626] pt-5 md:pt-0">{Name}</span>
                    </div>
                    <h4 className="font-[700] text-[20px] text-[#262626] pb-3">{Track}</h4>
                    <div className="pb-5">
                        <span className="font-[400] text-[14px] text-[#4C4C4D]">{Descrption}</span>
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
        </div>
    )
}

CoursesCard.propTypes = {
    courseCard: PropTypes.exact({
        image: PropTypes.string.isRequired,
        imageAlt: PropTypes.string.isRequired,
        Duration: PropTypes.string.isRequired,
        Level: PropTypes.string.isRequired,
        Name: PropTypes.string.isRequired,
        Track: PropTypes.string.isRequired,
        Descrption: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })
}

export default Courses2;