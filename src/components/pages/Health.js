import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Display } from './Display';



const key = 'pub_1164815d738c9f7b5072ea44c39601c16bbce'
const url = `https://newsdata.io/api/1/news?apikey=${key}&language=en&category=health`
export default function Health() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [displayData, setDisplayData] = useState([]);

  const [readMore, setReadMore] = useState(false);

  const getId = (id) => {
    console.log(id)
    setDisplayData(data[id])
    setReadMore(!readMore)
  }


  const getData = async () => {
    try {
      const response = await axios(url);
      if (response.status === 200 || response.status === 201) {
        setData(response.data.results);
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

    !isLoading ?
      <div className="py-[2rem]">
        <h1 className=" text-[2.5rem] pb-[2rem] font-bold font-header capitalize header ">Health</h1>
        <div className=" lg:grid grid-cols-2 gap-8 ">

          {
            data && data
              .map((data, id) => {
                return (
                  <div className=" mb-[4rem] " key={id}>
                    {data.image_url &&
                      <img src={data.image_url} alt="" className=" w-full h-[20rem] object-cover rounded shadow-xl border border-border  " />}
                    <h1 className="font-semibold my-[1rem] text-[1.3rem]  ">{data.title}</h1>
                    <p className=' font-serif '>{data.description}</p>
                    <button className="px-5 py-2 mt-[1rem]  border border-border rounded" onClick={() => getId(id)}>
                      Read more...
                    </button>


                  </div>
                )
              })
          }
        </div>
        {
          readMore &&
          <Display setReadMore={setReadMore} readMore={readMore} displayData={displayData} />
        }

      </div >
      :
      <h1 className=" text-center font-header my-[9rem] text-[2rem]">Loading...</h1>
  );
}
