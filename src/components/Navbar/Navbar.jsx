import React, { useEffect, useState } from 'react';
import { navLinks } from '../../Data';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import MobileNavLinks from './MobileNavLinks';
import NavLink from './NavLink';
import { motion } from 'framer-motion';
import logoo from '../../Data';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, [active]);
  return (
    <div className={`${active ? 'shadow-lg bg-Solitude' : ''} fixed w-full top-0 left-0 z-20`}>
      <div>
        <div className={`${active ? 'py-2 transition-all duration-300' : 'py-4'} container  mx-auto flex items-center justify-between px-2`}>
          <div className="flex items-center gap-4">
            <HiMenuAlt1 className="text-3xl sm:hidden cursor-pointer" onClick={() => setToggle(true)} />
            <div className="w-[150px]">
              <img src={logoo} alt="" />
            </div>
          </div>
          <div className="sm:flex items-center hidden ">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
            <div>
              <button className="hover:scale-105 py-3 px-6 mx-1 font-bold text-sm text-white bg-[#ff0000] rounded-lg">Sign Up</button>
              <button className="py-3 px-6 font-bold text-sm border border-solid border-gray hover:border-[#ff0000] hover:text-[#ff0000] rounded-lg">Login</button>
            </div>
          </div>

          {toggle && (
            <>
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed h-full w-96 top-0 z-20 bg-white text-black flex flex-col justify-center items-center shadow-lg gap-8 py-8"
              >
                {navLinks.map((navLink) => {
                  return (
                    <>
                      <MobileNavLinks key={navLink.id} {...navLink} setToggle={setToggle} />
                    </>
                  );
                })}

                <HiX className="absolute right-12 top-12 text-3xl cursor-pointer text-black" onClick={(prev) => setToggle(!prev)} />
                <div className="flex flex-col justify-center items-center gap-0 py-[100px]">
                  <button className="hover:scale-105 py-3 px-6 mb-3 mr-8 font-bold text-sm text-white bg-[#ff0000] rounded-lg">Sign Up</button>
                  <div className="mr-100 mt-100">
                    <button className="py-3 px-6 mr-8 font-bold text-sm border border-solid border-gray rounded-lg">Login</button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
