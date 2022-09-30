import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import React from "react";

export function Footer({ active }) {
    return (<div className=" bg- py-[2rem] text- border-t shadow-lg border-t-border">
        <div className="flex">
            <div className="w-[50%] p-[3rem] ">

                <div className="mx-auto w-[15%]">

                    <img src="./asset/logo.png" alt="" className=" w-[2rem] ml-4  " /><Link to='/' className="font-header text-[1.5rem] font-semibold text-center w-content mx-auto header ">EJ.news</Link>
                </div>

            </div>
            <div className="w-[50%]  ">

                <ul className=" flex flex-col  justify-evenly text-[.85rem] text-center gap-3 mb-[3rem] pt-3 ">
                    <Link to='/world' className={active === 'world' ? " cursor-pointer font-semibold " : 'font-normal'}>World</Link>
                    <Link to='/business' className={active === 'business' ? " cursor-pointer font-semibold " : 'font-normal'}>Business</Link>

                    <Link to='/entertainment' className={active === 'entertainment' ? " cursor-pointer font-semibold" : 'font-normal'}>Entertainment</Link>
                    <Link to='/environment' className={active === 'environment' ? " cursor-pointer font-semibold" : 'font-normal'}>Environment</Link>
                    <Link to='/health' className={active === 'health' ? " cursor-pointer font-semibold" : 'font-normal'}>Health</Link>
                    <Link to='/politics' className={active === 'politics' ? " cursor-pointer font-semibold" : 'font-normal'}>Politics</Link>
                    <Link to='/sport' className={active === 'sport' ? " cursor-pointer font-semibold " : 'font-normal'}>Sport</Link>
                    <Link to='/science' className={active === 'science' ? " cursor-pointer font-semibold" : 'font-normal'}>Science</Link>
                    <Link to='/technology' className={active === 'technology' ? " cursor-pointer font-semibold" : 'font-normal'}>Technology</Link>
                </ul>

            </div>
        </div>
        <div className=" mb-[3rem] flex  justify-evenly w-[80%]  mx-auto ">
            <a href='https://twitter.com/John_E_Ekwere'>
                <FaTwitter size={20} className=' hover:scale-[120%] transition ease-in-out duration-500 cursor-pointer' />
            </a>
            <a href='https://github.com/jon-3kw3r3'>
                <VscGithub size={20} className='  hover:scale-[120%] transition ease-in-out duration-500 cursor-pointer  ' />
            </a>
            <a href='https://linkedin.com/in/john-ebong-118653240'>
                <FaLinkedinIn size={20} className=' hover:scale-[120%] transition ease-in-out duration-500  cursor-pointer ' />
            </a>

            <a href='https://wa.me/+2348109156506'>
                <FaWhatsapp size={20} className=' hover:scale-[120%] transition ease-in-out duration-500  cursor-pointer ' />
            </a>
            <a href='https://t.me/+2348109156506'>
                <FaTelegramPlane size={20} className=' hover:scale-[120%] transition ease-in-out duration-500  cursor-pointer ' />
            </a>
            <a href='https://discordapp.com/users/John-E-E#9435'>
                <FaDiscord size={20} className=' hover:scale-[120%] transition ease-in-out duration-500 cursor-pointer' />
            </a>
        </div>

        <h1 className="w-[80%] mx-auto text-center py-[1rem] border-t border-t-border text-[.75rem]  tracking-wider "> Copyright &copy; 2022 EJ.news. The EJ.news is not responsible for the content of external sites.</h1>
    </div>);
}
