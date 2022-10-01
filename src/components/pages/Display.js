import React from 'react';

export function Display({ setReadMore, readMore, displayData }) {
    return (
        <div className="fixed bg-border w-full h-full top-0 left-0  " >
            <div className="fixed  w-full h-full top-0 left-0  " onClick={() => setReadMore(!readMore)}>
                
        </div>
            <div className="absolute background md:w-[60%] w-[90%]  left-[50%] rounded scroll-smooth -translate-x-[50%] top-[2rem] h-[90vh]  mt-[20rem] pb-[2rem] md:p-[2rem] overflow-auto scrollbar px-[4%] ">

            <div className=" ">
                <button className="   hover:scale-110 transition duration-500 ease-in-out mb-[1rem] font-semibold text-[2rem] " onClick={() => setReadMore(!readMore)}>x</button>
                {displayData.image_url && <img src={displayData.image_url} alt="" className=" w-full h-[20rem] object-cover rounded shadow-xl border border-border  " />}
                <h1 className="font-semibold my-[1rem] text-[1.3rem]  ">{displayData.title}</h1>
                <p className=' font-serif my-[1rem] border-b border-b-border pb-2  '>{displayData.description}</p>
                <p className=' font-serif '>{displayData.content}</p>
                <button className="px-5 py-2 mt-[1rem]  bg-black text-white rounded"><a href={displayData.link} className=" font-semibold  ">Read more...</a></button>


            </div>
        </div>

    </div>);
}
