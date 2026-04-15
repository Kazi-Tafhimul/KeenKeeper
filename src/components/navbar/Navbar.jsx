import React from 'react';
import { IoHome } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';


const Navbar = () => {
   const getNavClass = ({isActive}) => {
    return isActive ? "btn btn-success text-white" : "btn btn-ghost";
   };
  
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
        <li><NavLink to={"/"} className={getNavClass}>Home</NavLink></li>
        <li><NavLink to={"/timeline"} className={getNavClass}>Timeline</NavLink></li>
        <li><NavLink to={"/stats"} className={getNavClass}>Stats</NavLink></li>
       
       
      </ul>
    </div>
    <a className="text-xl"><span className='font-bold'>Keen</span>Keeper</a>
  </div>
  
  <div className="hidden md:flex md:navbar-end">
    <NavLink to={"/"} className={getNavClass}><IoHome/>Home</NavLink>
    <NavLink to={"/timeline"} className={getNavClass}><RiTimeLine/>Timeline</NavLink>
    <NavLink to={"/stats"} className={getNavClass}><TfiStatsUp/>Stats</NavLink>
  </div>
</div>
    );
};

export default Navbar;