import { NavLink } from "react-router-dom";
import RightArrow from "../UI/icons/RightArrow";
import BurgerMenu from "../UI/BurgerMenu";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="border-b border-light-950">
      <NavLink
        to="#"
        className="flex items-center justify-center gap-x-3 btn-primary"
      >
        Courses 🌟 Sale Ends Soon, Get It Now
        <RightArrow />
      </NavLink>
      <div className="py-[14px] flex justify-between xl:px-[60px]">
        <div className="flex items-center gap-x-[50px]">
          <NavLink to="/">
            <img src="./logo.svg" alt="Logotype" />
          </NavLink>

          <Navigation styles="hidden lg:block" />
        </div>

        <div className="flex items-center gap-x-5">
          <NavLink className="hover-link" to="/sign-up">
            Sign Up
          </NavLink>
          <NavLink to="/login" className="py-3 px-5 rounded-md btn-primary">
            Login
          </NavLink>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
