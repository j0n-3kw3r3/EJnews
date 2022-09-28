import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';



export default function Technology() {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
  
  
  
    useEffect(() => {
      return () => {
        const key = 'pub_1164815d738c9f7b5072ea44c39601c16bbce'
        const url = `https://newsdata.io/api/1/news?apikey=${key}&language=en&category=business,politics,sports,technology,top`
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

    const technology = data?.results.filter((value) => {
        const val = value.category[0].includes('technology')
        return val
    }
    )
  return (

      isLoading ?
      <div className="py-[2rem]">
           <h1 className=" text-[2.5rem] pb-[2rem] font-bold font-header capitalize ">Technology</h1>
          <div className=" md:grid grid-cols-3 gap-8 ">
              
          {
                    technology && technology
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
