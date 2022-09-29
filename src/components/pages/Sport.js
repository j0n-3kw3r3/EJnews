import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const key = 'pub_117291d3a603910ccf6f2f2e86ea96214e17e'
const url = `https://newsdata.io/api/1/news?apikey=${key}&language=en&category=sports`
export default function Sport() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
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
                <h1 className=" text-[2.5rem] pb-[2rem] font-bold font-header capitalize header ">Sport</h1>
                <div className=" lg:grid grid-cols-3 gap-8 ">

                    {
                        data && data
                          .map((data, id) => {
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

            </div >
            :
            <h1 className=" text-center font-header my-[9rem] text-[2rem]">Loading...</h1>
    );
}
