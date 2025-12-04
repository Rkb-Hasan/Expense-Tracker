import { Link } from "react-router-dom";
import addIcon from "../../assets/icons/add.svg";
import test from "../../assets/icons/bell-svgrepo-com(1).svg";
import homeIcon from "../../assets/icons/home.svg";
import profileIcon from "../../assets/icons/profile.svg";
import searchIcon from "../../assets/icons/search.svg";
import statIcon from "../../assets/icons/stat.svg";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-1">
      <div className="container flex  items-center justify-between ">
        <Link to="/">
          <img
            className="max-w-[30px] md:max-w-10 lg:max-w-[60px] rounded-full text-light-lavender"
            src={homeIcon}
          />
        </Link>

        <div className=" flex items-center justify-center lg:gap-10 sm:gap-10 grow">
          <Link to="/">
            <button className="icon-btn cursor-pointer">
              <img
                className="w-[18px] md:w-6 lg:w-8 "
                src={homeIcon}
                alt="Home"
              />
            </button>
          </Link>

          <Link to="/addentry">
            <button className="icon-btn cursor-pointer">
              <img
                className="w-[18px] md:w-6 lg:w-8 "
                src={addIcon}
                alt="Add"
              />
            </button>
          </Link>

          <Link to="">
            <button className="icon-btn cursor-pointer">
              <img
                className="w-[18px] md:w-6 lg:w-8 "
                src={test}
                alt="Notification"
              />
            </button>
          </Link>

          <Link to="/statistics">
            <button className="icon-btn cursor-pointer">
              <img
                className="w-[18px] md:w-6 lg:w-8 "
                src={statIcon}
                alt="Stat"
              />
            </button>
          </Link>

          <Link to="">
            <button className="icon-btn cursor-pointer">
              <img
                className="w-[18px] md:w-6 lg:w-8 "
                src={searchIcon}
                alt="Search"
              />
            </button>
          </Link>
        </div>

        <Link to="/me">
          <button className="flex-center  gap-2 cursor-pointer">
            <span className="text-[10px] sm:text-base font-medium md:text-lg lg:text-xl  ">
              {/* {user?.firstName} {user?.lastName} */}
            </span>
            <img
              className="h-8 w-8 md:h-12 md:w-12 lg:h-15 lg:w-15 rounded-full"
              src={profileIcon}
              alt="avatar"
            />
          </button>
        </Link>
      </div>
    </nav>
  );
}
