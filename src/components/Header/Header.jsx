import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1, HiMenuAlt4 } from 'react-icons/hi';
import './Header.css'


const Header = () => {

    const [open, setOpen] = useState(false)

    const handleDropDown = () => {
        setOpen(!open)
    }

    return (

        <nav className=" text-black py-2">

            <div className="flex justify-between items-center">

                <div>
                    <img className="w-40" src="https://i.ibb.co/pzXdG9W/Logo.png" alt="" />
                </div>

                <div className="relative" >
                    <div className={`flex  flex-col md:flex-row absolute md:static duration-1000 px-2 py-3 text-black ${open ? 'top-5  -left-11 z-10' : ' -left-11 -top-40'}`}>

                        <NavLink className="mr-6 text-lg font-semibold" to="/">Home</NavLink>

                        <NavLink className="mr-6 text-lg font-semibold" to="/donation">Donation</NavLink>

                        <NavLink className="mr-6 text-lg font-semibold" to="/statistics">Statistics</NavLink>

                    </div>
                </div>

                <div onClick={handleDropDown} className="md:hidden text-xl">
                    {
                        open ? <HiOutlineMenuAlt1></HiOutlineMenuAlt1> : <HiMenuAlt4></HiMenuAlt4>
                    }
                </div>

            </div>
        </nav>
    );
};

export default Header;