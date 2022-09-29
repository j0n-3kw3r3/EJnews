import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from "./Home";
import Business from "./components/pages/Business";
import Politics from "./components/pages/Politics";
import Sport from "./components/pages/Sport";
import Technology from "./components/pages/Technology";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "./Footer";





function App() {
  const [data, setData] = useState('');
  const [active, setActive] = useState('');


  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const getLo = () => {
      const location = window.location.pathname.split('/')[1];
      setActive(location);

    };
    getLo()
  });



  useEffect(() => {
    const getNews = async () => {
      // const random = Math.floor(Math.random() * 128, 641)
      const key = 'pub_117291d3a603910ccf6f2f2e86ea96214e17e'
      const url = `https://newsdata.io/api/1/news?apikey=${key}&language=en&category=business,politics,sports,technology,top`;

      return await axios(url).then(data => {
        setData(data.data);
        setIsLoading(true)
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    getNews()

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
            <h1 className=" text-center font-header my-[9rem] text-[2rem]">Loading...</h1>
        }

        <Footer active={active} />
      </div>
    </Router>

  );
}

export default App;

