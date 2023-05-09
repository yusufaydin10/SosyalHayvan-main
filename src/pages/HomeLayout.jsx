import React, { useState, useEffect, useRef } from "react";
import { FaBook, FaPeopleArrows, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";
import lottie from "lottie-web";
import { useSelector } from "react-redux";
import cat from "../images/kedi.png";


const HomeLayout = () => {
  const [status, setStatus] = useState(false);
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,

      animationData: require("../lotties/home.json"),
    });
  }, []);

  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <nav className="flex h-[80px] w-full items-center justify-between blur-effect fixed top-0 z-50 pl-2 text-white">
        <div className="md:w-[80px] h-[80px]">
          <NavLink to="/">
          <div className="container w-[80px] h-[80px]" ref={container}></div>
     
          </NavLink>
        </div>

        <div className="ml-8 flex w-[30%] items-center gap-x-10 md-max:hidden">
          <NavLink
            to="/forum"
            className="flex flex-col items-center justify-center hover:text-brand-16"
          >
            <FaPeopleArrows className="h-[20px] w-[20px] text-[#C58940]" />
            <p className="text-[#C58940]">Forum</p>
          </NavLink>
          <NavLink
            to="/blog"
            className=" flex flex-col items-center justify-center hover:text-brand-16"
          >
            <FaBook className="h-[20px] w-[20px] text-[#C58940]" />
            <p className="text-[#C58940]">Blog</p>
          </NavLink>

          {user ? (
            <NavLink
              to="/profile"
              className="flex flex-col items-center justify-center hover:text-brand-16"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  className="h-[20px] w-[20px] rounded-[50%]"
                  alt="img"
                />
              ) : (
                <CgProfile className="h-[20px] w-[20px] text-[#C58940]"/>
              )}
{
              <p className="text-[#C58940]">{user.displayName ? user.displayName : <p className="text-[#D2001A]">Kullanıcı Adı</p>}</p>
}
            
            </NavLink>
          ) : (
            <NavLink
              to="/Auth"
              className="flex flex-col items-center justify-center hover:text-brand-16"
            >
              <FaUserAlt className="h-[20px] w-[20px] text-[#C58940]"/>
              <p className="text-[#C58940]">Login</p>
            </NavLink>
          )}
        </div>

        {status ? (
          <GiHamburgerMenu
            onClick={() => setStatus(!status)}
            className="absolute top-4 right-11 h-[40px] w-[40px] cursor-pointer md:hidden "
          />
        ) : (
          <GrClose
            onClick={() => setStatus(!status)}
            className="absolute top-4 right-11 h-[40px] w-[40px] cursor-pointer md:hidden"
          />
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
