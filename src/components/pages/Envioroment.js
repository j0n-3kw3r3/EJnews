import React from 'react';

export default function Envioroment({ data }) {
    const env = data.results.filter((value) => {
        const val = value.category[0].includes('envioroment')
        return val
    }
    )
  return (
      <div className="py-[2rem]">
           <h1 className=" text-[2.5rem] pb-[2rem] font-bold font-header capitalize ">Envioroment</h1>
          <div className=" grid grid-cols-3 gap-8 ">
              
          {
                    env && env
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
  );
}
