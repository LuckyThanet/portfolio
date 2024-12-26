import React, { useState } from 'react';
import { HomeOutlined, UserOutlined, SettingOutlined, ContactsOutlined, MenuOutlined, LaptopOutlined } from '@ant-design/icons';
const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <div className="sticky top-0 left-0 w-full z-[1000]">
            <div className="bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 safari-nav">
                <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-screen-xl">

                    {/* Hamburger Icon for small screens */}
                    <div className="sm:hidden flex items-center justify-between w-full" onClick={toggleMenu}>
                        <div className="flex items-center ml-2">
                            <a href="https://github.com/LuckyThanet" className="block border-b-2 border-black ">
                                <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=000000&width=435&height=30&lines=My+Portfolio;+I+want+to+be+Web+development" alt="Typing SVG" />
                            </a>
                        </div>
                        <MenuOutlined className="text-xl text-black hover:cursor-pointer ml-4" />
                    </div>

                    {/* Navbar Items - visible only on large screens */}
                    <div className="hidden sm:flex justify-center lg:gap-12 flex-1">
                        <NavItem icon={<HomeOutlined className="text-xl" />} label="Home" />
                        <NavItem icon={<UserOutlined className="text-xl" />} label="Profile" />
                        <NavItem icon={<LaptopOutlined className="text-xl" />} label="Experiences" />
                        <NavItem icon={<SettingOutlined className="text-xl" />} label="Projects" />
                        <NavItem icon={<ContactsOutlined className="text-xl" />} label="Contact" />
                    </div>
                </div>

                {/* Mobile Menu - visible only when isMenuOpen is true */}
                {isMenuOpen && (
                    <div className="relative">
                        <div className="lg:hidden absolute bg-white/10 w-full backdrop-blur-lg py-4 z-50">
                            <NavItem icon={<HomeOutlined className="text-xl" />} label="Home" />
                            <NavItem icon={<UserOutlined className="text-xl" />} label="Profile" />
                            <NavItem icon={<LaptopOutlined className="text-xl" />} label="Experiences" />
                            <NavItem icon={<SettingOutlined className="text-xl" />} label="Projects" />
                            <NavItem icon={<ContactsOutlined className="text-xl" />} label="Contact" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => {

    // <a className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-700 hover:cursor-pointer transition duration-300" onClick={() => handleScroll("projects")}>See My Projects</a>
    const handleScroll = (id: string): void => {
        const target = document.getElementById(id);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        // <Link to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}>
        <div className="flex items-center gap-3 px-6 py-3 cursor-pointer rounded-xl  hover:scale-105 transition-all duration-300"
            onClick={() => handleScroll(`${label.toLowerCase()}`)}>
            {icon}
            <span className="text-black text-xs lg:text-xl">{label}</span>
        </div>
        // </Link>
    );
};

export default Navbar;
