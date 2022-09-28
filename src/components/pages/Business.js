import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Business() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    return () => {
      const random = Math.floor(Math.random() * 10)

      const key = 'pub_117291d3a603910ccf6f2f2e86ea96214e17e'
      const url = `https://newsdata.io/api/1/news?apikey=${key}&language=en&category=business&page=${random}`
      axios(url).then(data => {
        setData(data.data);
        setIsLoading(true)
        console.log(data);
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
  }, []);

  const business = data?.results.filter((value) => {
    const val = value.category[0].includes('top')
    return val
  }
  )
  return (
    isLoading ?
      <div className="py-[2rem]">
        <h1 className=" text-[2.5rem] pb-[2rem] font-bold font-header capitalize header ">Business</h1>
        <div className=" lg:grid grid-cols-3 gap-8 ">

          {
            business && business
              .slice(0, 20).map((data, id) => {
                return (
                  <div className=" mb-[4rem] " key={id}>
                    {data.image_url &&
                      <img src={data.image_url} alt="" className=" w-full h-[20rem] " />}
                    <h1 className="font-semibold">{data.title}</h1>
                    <p>{data.description}</p>
                    <button className="px-5 py-2 mt-[1rem] bg-black text-white"><a href={data.link} className=" font-semibold ">Read more...</a></button>


                  </div>
                )
              })
          }
        </div>

      </div>
      :
      <h1 className=" text-center font-header my-[9rem] text-[4rem]">Loading...</h1>
  );
}
