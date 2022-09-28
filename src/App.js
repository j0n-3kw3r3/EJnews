import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'

import { Home } from "./Home";
import Business from "./components/pages/Business";
import Politics from "./components/pages/Politics";
import Sport from "./components/pages/Sport";
import Technology from "./components/pages/Technology";
import React, { useEffect, useState } from "react";
import axios from "axios";





function App() {
  const [data, setData] = useState();
  const [active, setActive] = useState('');


  const [isLoading, setIsLoading] = useState(false);
  const random = Math.floor(Math.random() * 128, 641)


  useEffect(() => {
    const getLo = () => {
      const location = window.location.pathname.split('/')[1];
      setActive(location);

    };
    getLo()
  },);



  useEffect(() => {
    return () => {
      const key = 'pub_1164815d738c9f7b5072ea44c39601c16bbce'
      const url = `https://newsdata.io/api/1/news?apikey=${key}&language=en&category=business,politics,sports,technology,top&page=${random}`
      axios(url).then(data => {
        setData(data.data);
        setIsLoading(true)
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
  }, []);


  return (
    <Router>

      <div className=" max-w-7xl w-[90%] mx-auto font-body ">
        <NavBar />
        {
          isLoading ?
            <Routes>
              <Route path="/" element={<Home data={data} />} />
              <Route path="/business" element={<Business />} />

              <Route path="/politics" element={<Politics />} />
              <Route path="/sport" element={<Sport />} />
              <Route path="/technology" element={<Technology />} />
            </Routes>
            :
            <h1 className=" text-center font-header my-[9rem] text-[4rem]">Loading...</h1>
        }

        <div className=" bg- py-[2rem] text- border-t shadow-lg border-t-border">
          <div className="flex">
            < div className="w-[50%] p-[3rem] ">

              <div className="mx-auto w-[15%]">

                <img src="./asset/logo.png" alt="" className=" w-[2rem] ml-4  " /><Link to='/' className="font-header text-[1.5rem] font-semibold text-center w-content mx-auto " >EJ.news</Link>
              </div>

            </div>
            < div className="w-[50%]  ">

              <ul className=" flex flex-col  justify-evenly text-[.85rem] text-center gap-3 mb-[3rem] pt-3 ">
                <Link to='/business' className={active === 'business' ? " cursor-pointer font-semibold " : 'font-normal'}  >Business</Link>

                <Link to='/politics' className={active === 'politics' ? " cursor-pointer font-semibold" : 'font-normal'}  >Politics</Link>
                <Link to='/sport' className={active === 'sport' ? " cursor-pointer font-semibold " : 'font-normal'}  >Sport</Link>
                <Link to='/technology' className={active === 'technology' ? " cursor-pointer font-semibold" : 'font-normal'}  >Technology</Link>
              </ul>

            </div>
          </div>
          <div className=" mb-[3rem] flex  justify-evenly w-[80%]  mx-auto ">
            <a
              href='https://twitter.com/John_E_Ekwere'
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 1,
                color: '#00abee9b'
              }}
              initial={{
                color: '#00acee'
              }}
              transition={{
                duration: 0.1
              }}
            >
              <FaTwitter size={20} className=' hover:scale-[120%] transition ease-in-out duration-500 cursor-pointer' />
            </a>
            <a
              href='https://github.com/jon-3kw3r3'
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 1,
                color: '#ffffff92'
              }}
              initial={{
                color: '#ffffff'
              }}
              transition={{
                duration: 0.1
              }}
            >
              <VscGithub size={20} className='  hover:scale-[120%] transition ease-in-out duration-500 cursor-pointer  ' />
            </a>
            <a
              href='https://linkedin.com/in/john-ebong-118653240' whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 1,
                color: '#0076b59e'
              }}
              initial={{
                color: '#0077b5'
              }}
              transition={{
                duration: 0.1
              }}
            >
              <FaLinkedinIn size={20} className=' hover:scale-[120%] transition ease-in-out duration-500  cursor-pointer ' />
            </a>

            <a
              href='https://wa.me/+2348109156506'
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 1,
                color: '#25d36590'
              }}
              initial={{
                color: '#25D366'
              }}
              transition={{
                duration: 0.1
              }}
            >
              <FaWhatsapp size={20} className=' hover:scale-[120%] transition ease-in-out duration-500  cursor-pointer ' />
            </a>
            <a
              href='https://t.me/+2348109156506'
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 1,
                color: '#0088cc8c'
              }}
              initial={{
                color: '#0088cc'
              }}
              transition={{
                duration: 0.1
              }}
            >
              <FaTelegramPlane size={20} className=' hover:scale-[120%] transition ease-in-out duration-500  cursor-pointer ' />
            </a>
            <a
              href='https://discordapp.com/users/John-E-E#9435'
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 1,
                color: '#7289da91',

              }}
              initial={{
                color: '#7289DA'
              }}
              transition={{
                duration: 0.1
              }}
            >
              <FaDiscord size={20} className=' hover:scale-[120%] transition ease-in-out duration-500 cursor-pointer' />
            </a>
          </div>

          <h1 className="w-[80%] mx-auto text-center py-[1rem] border-t border-t-border text-[.75rem] font-light tracking-wider "> Copyright &copy; 2022 EJ.news. The EJ.news is not responsible for the content of external sites.</h1>
        </div>
      </div>
    </Router>

  );
}

export default App;
