export default function Section2({ props, data, ent }) {

  

    return (
        <div className="py-[2rem]">

            <h1 className=" text-[2.5rem] font-bold font-header capitalize ">{props}</h1>
            <div className=" flex justify-evenly gap-[1.5rem] ">
                {
                    ent && ent
                        .slice(0, 1).map((data, id) => {
                            return (
                                <div className="w-[60%] " key={id}>
                                    {data.image_url &&
                                        <img src={data.image_url} alt="" className=" w-full h-[20rem] " />}
                                    <h3 className="text-[.75rem] text-white bg-border py-[.25rem] mb-[1rem] ">{data.title}</h3>
                                    <p>{data.description}</p>
                                    <button className="px-5 py-2 mt-[1rem] bg-black text-white"><a href={data.link} className=" font-semibold ">Read more...</a></button>


                                </div>
                            )
                        })
                }


                <div className="w-[30%]">
                    {
                        ent && ent
                            .slice(1, 4).map((data, id) => {
                                return (
                                    <div className=" pb-[1rem]">
                                        {data.image_url &&
                                            <img src={data.image_url} alt="" className=" w-[100%] h-[10rem] mb-[.5rem] " />}
                                        <h1 className="font-semibold">{data.title} </h1>
                                        <a href={data.link} className=" font-semibold">Read more...</a>



                                    </div>
                                )
                            })
                    }



                </div>


            </div>
        </div>
    );
}
