'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Nav from './Nav';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  const links = [
    {
      name: "home",
      path: "/"
    },
    {
      name: "about",
      path: "#about"
    }
  ]
  return (
    <div className='fixed left-0 text-white bg-black top-0 w-full z-10 ease-in duration-300 border-b border-white'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
        <Link href='/'>
          <h1 className='font-bold text-3xl'>
            Jadwelny
          </h1>
        </Link>
        <div className='hidden sm:flex'>
          <Nav />
        </div>


        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: '#000' }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: '#fff' }} />
          )}
        </div>
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-bg-white text-center ease-in duration-300'
          }
        >
          <ul>
            {links.map((link, index) => {
              return (
                <li onClick={handleNav} className='p-4 text-3xl font-medium text-black hover:border-b-2 border-black'>
                  <Link href={link.path} key={index}>{link.name}</Link>
                </li>
              )
            }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;