export default function Section1({ props, data, business }) {




    return (
        <div className="py-[2rem]">
            <h1 className=" text-[2.5rem] font-bold font-header capitalize ">{props}</h1>

            <div className=" md:flex justify-evenly gap-[1.5rem] ">




                {

                    business && business
                        .slice(0, 3).map((data, id) => {
                            return (
                                <div className="md:w-[30%]" key={id}>
                                    {data.image_url &&
                                        <img src={data.image_url} alt="" className=" w-[100%] h-[10rem] mb-[.5rem] " />}
                                    <div className="flex text-[.75rem] justify-between">
                                        <h1 className="font-semibold">by {data.creator}</h1>
                                        <h1 className="">{data.pubDate}</h1>
                                    </div>
                                    <h1 className=" font-semibold">{data.source_id}</h1>
                                    <p className=" break-all " >{data.title.split(' ').slice(0, 20).join(' ')}</p>
                                    <a href={data.link} className=" font-semibold">Read more...</a>
                                </div>

                            )
                        }
                        )
                }




            </div>
        </div>
    );
}
