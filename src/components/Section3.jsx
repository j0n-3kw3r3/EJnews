export default function Section3({ props, data, tech }) {


  return (<div className="py-[2rem]">

    <h1 className=" text-[2.5rem] font-bold font-header capitalize header ">{props}</h1>
    <div className=" md:flex md:justify-between md:gap-[1.5rem] w-full ">


      {
        tech && tech
          .slice(1, 4).map((data, id) => {
            return (
              <div className=" pb-[1rem] w-full">
                {data.image_url &&
                  <img src={data.image_url} alt="" className=" w-[100%] md:h-[10rem] mb-[.5rem] object-cover shadow-lg " />}
                <h1 className="font-semibold w-full  ">{data.title} </h1>
                <a href={data.link} className=" font-semibold">Read more...</a>



              </div>
            )
          })
      }


      {

        tech && tech
          .slice(0, 1).map((data, id) => {
            return (
              <div className="w-[60%] " key={id}>
                {data.image_url &&
                  <img src={data.image_url} alt="" className=" w-full h-[20rem] object-cover shadow-lg " />}
                <h3 className="text-[.75rem] text-white bg-border py-[.25rem] mb-[1rem] ">{data.title}</h3>
                <p className=" font-serif">{data.description}</p>
                <button className="px-5 py-2 mt-[1rem] bg-black text-white"><a href={data.link} className=" font-semibold ">Read more...</a></button>
                


              </div>
            )
          })
      }


    </div>
  </div>);
}
