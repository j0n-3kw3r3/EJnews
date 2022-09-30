import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from "./Home";

import Science from "./components/pages/Science";
import Health from "./components/pages/Health";
import Entertainment from "./components/pages/Entertainment";
import Environment from "./components/pages/Environment";
import Business from "./components/pages/Business";
import World from "./components/pages/World";
import Politics from "./components/pages/Politics";
import Sport from "./components/pages/Sport";
import Technology from "./components/pages/Technology";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "./Footer";





const key = 'pub_117291d3a603910ccf6f2f2e86ea96214e17e'
const url = `https://newsdata.io/api/1/news?apikey=${key}&language=en&category=business,politics,sports,technology,top`;
function App() {
  const [data, setData] = useState('');
  const [active, setActive] = useState('');


  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const getLo = () => {
      const location = window.location.pathname.split('/')[1];
      setActive(location);

    };
    getLo()
  });




  const getData = async () => {
    try {
      const response = await axios(url);
      if (response.status === 200 || response.status === 201) {
        setData(response.data);
        setIsLoading(false)
      }
    } catch (e) {
      setIsLoading(true)
      console.log(e)
    }
  }



  useEffect(() => {
    getData()
  }, []);



  return (
    <Router>

      <div className=" max-w-7xl w-[90%] mx-auto font-body ">
        <NavBar />
        {
          !isLoading ?
            <Routes>
              <Route path="/" element={<Home data={data} />} />
              <Route path="/business" element={<Business />} />
              <Route path="/world" element={<World />} />
              <Route path="/politics" element={<Politics />} />
              <Route path="/sport" element={<Sport />} />
              <Route path="/science" element={<Science />} />
              <Route path="/environment" element={<Environment />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route path="/health" element={<Health />} />
              <Route path="/technology" element={<Technology />} />
            </Routes>
            :
            <h1 className=" text-center font-header my-[9rem] text-[2rem]">Loading...</h1>
        }

        <Footer active={active} />
      </div>
    </Router>

  );
}

export default App;

