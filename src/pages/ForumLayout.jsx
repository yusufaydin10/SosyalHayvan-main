import Lottie from 'lottie-web'
import React, { useEffect, useRef, useState } from 'react'
import { FaBook, FaPeopleArrows, FaUserAlt } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'



const ForumLayout = () => {
  const [status, setStatus] = useState(false);
  const {user} = useSelector(state => state.auth)

  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,

      animationData: require("../lotties/home.json"),
    });
  }, []);


  return (
    <div>
         <nav className="flex h-[80px] w-full items-center justify-between fixed top-0 z-50 blur-effect pl-2 text-white shadow-cardShadow">
        <div className="md:w-[20%] md:pl-[60px] ">
          <NavLink to="/">
          <div className="container w-[80px] h-[80px]" ref={container}></div>

          </NavLink>
        </div>

        <div className="ml-8 flex w-[30%] items-center gap-x-10 md-max:hidden">
          <NavLink
            to="/forum"
            className="flex flex-col items-center justify-center hover:text-brand-16"
          >
            <FaPeopleArrows className="h-[20px] w-[20px] text-[#C58940]"/>
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
              <img
                src={user.photoURL}
                className="h-[20px] w-[20px] rounded-[50%] "
                alt="img"
              />
              <p className="text-[#C58940]">{user.displayName}</p>
            </NavLink>
          ) : (
            <NavLink
            to="/Auth"
            className="flex flex-col items-center justify-center hover:text-brand-16"
          >
            <FaUserAlt className="h-[20px] w-[20px] text-[#C58940]" />
            <p className="text-[#C58940]">Login</p>
          </NavLink>
          )}
        </div>

        {status ? (
          <GiHamburgerMenu
            onClick={() => setStatus(!status)}
            className="absolute top-4 right-11 h-[40px] w-[40px] cursor-pointer md:hidden"
          />
        ) : (
          <GrClose
            onClick={() => setStatus(!status)}
            className="absolute top-4 right-11 h-[40px] w-[40px] cursor-pointer md:hidden"
          />
        )}
      </nav>
        <Outlet/>
    </div>
  )
}

export default ForumLayout