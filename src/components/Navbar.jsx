import React from 'react';
import { MdMenu } from "react-icons/md";
import { FaApple, FaRegUser } from "react-icons/fa";
import { NavbarData } from "../data/MockData";


const Navbar = () => {
  return (
    <nav className='text-white py-5'>
        <div className='container flex justify-between'>
            {/* logo section */}
            <div className="flex items-center gap-2 text-3xl font-semibold">
                <FaApple /> AirPods Max
            </div>
            {/* Menu Section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-4">
                    {
                        NavbarData.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a className="inline-block text-base py-2 px-3 uppercase" href={item.link}>{item.title}</a>
                                </li>
                            );
                        })
                    }
                    <button className="text-xl ps-14" >
                        <FaRegUser/>
                    </button>
                </ul>
            </div>

            {/* Hamburger menu section */}
            <div className='md:hidden'>
                <MdMenu className='text-4xl'></MdMenu>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
