import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';





export default function NavBar() {
    const [date, setDate] = useState();
    const [active, setActive] = useState('');
    const [state, setstate] = useState(true);
    const [weather, setWeather] = useState('');

    useEffect(() => {
        const getLo = () => {
            const location = window.location.pathname.split('/')[1];
            setActive(location);

        };
        getLo()
    }, [state]);


    useEffect(() => {
        const getWeather = async () => {
            const weatherApiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=30.0571&longitude=31.2272&hourly=temperature_2m';
            await axios(weatherApiUrl).then(data => {
                setWeather(data.data.hourly.temperature_2m[0]);
            });
        };
        getWeather()
    },);
    useEffect(() => {
        return () => {
            const d = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
            d.join(',')
            const m = ['jan', 'feb', 'mar', 'api', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec']
            const getDay = new Date().getDay()
            const getMonth = new Date().getMonth()
            const getYear = new Date().getFullYear()
            const getDate = new Date().getDate()
            const full = d[getDay] + ', ' + m[getMonth] + ' ' + getDate + ', ' + getYear

            setDate(full)
        };
    },);



    return (<nav className=" py-[1rem] w-full border-b border-border  px-[.2rem]  ">
        <div className="flex justify-between  ">

            <div className="flex font-semibold">

                <img src="./asset/logo.png" alt="" className=" h-[1.4rem] mr-[.5rem]  " /><Link to='/' className="font-header text-[1.2rem] " onClick={() => setstate(!state)} >EJ.news</Link>
            </div>

            {/* <div className="relative w-[20%] ">
                <input type="text" name="" id="" className=" w-full bg-transparent border border-border px-[1rem] placeholder-border placeholder:font-semibold " placeholder="Search for top stories" />
                <img src="./asset/search.png" alt="" className="absolute top-[.3rem] right-[.7rem]" />
            </div> */}
        </div>
        <div className="flex justify-between py-[rem] font-semibold relative text-[.75rem] ">

            <div className="   py-[1.2rem] capitalize " >{date}</div>
            <Link to='/' className=" text-center text-[3rem] font-[900] font-header md:absolute top 0 left-0 w-full " onClick={() => setstate(!state)}  >Todays News</Link>
            <div className="    py-[1.3rem]" >{weather}℃</div>

        </div>
        <div>
            <ul className=" flex justify-evenly text-[.85rem] border-t border-border pt-3 ">
                <Link to='/business' className={active === 'business' ? " cursor-pointer font-semibold hover:scale-[120%] transition ease-in-out duration-500 hover:font-semibold" : 'font-normal hover:scale-[120%] transition ease-in-out duration-500 hover:font-semibold'} onClick={() => setstate(!state)} >Business</Link>

                <Link to='/politics' className={active === 'politics' ? " hover:scale-[120%] transition ease-in-out duration-500 hover:font-semibold cursor-pointer font-semibold" : '  hover:scale-[120%] transition ease-in-out duration-500 hover:font-semibold font-normal'} onClick={() => setstate(!state)} >Politics</Link>
                <Link to='/sport' className={active === 'sport' ? " cursor-pointer font-semibold hover:scale-[120%] transition ease-in-out duration-500 hover:font-semibold " : 'font-normal  hover:scale-[120%] transition ease-in-out duration-500 hover:font-semibold '} onClick={() => setstate(!state)} >Sport</Link>
                <Link to='/technology' className={active === 'technology' ? " cursor-pointer font-semibold hover:scale-[120%] transition ease-in-out duration-500 hover:font-semibold" : 'font-normal hover:scale-[120%] transition ease-in-out duration-500 hover:font-semibold'} onClick={() => setstate(!state)} >Technology</Link>
            </ul>
        </div>
    </nav>);
}
