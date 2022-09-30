export default function Hero({ data }) {
    const top = data?.results.filter((value) => {
        const val = value.category[0].includes('top')
        return val

    }
    )
    return (


        data && top
            .slice(0, 1).map((data, id) => {
                return (
                    <div className="py-[2rem] justify-between md:flex " key={id}>

                        {   data.image_url &&
                            <img src={data.image_url} alt="" className=" md:w-[48%] h-[20rem] object-cover rounded shadow-lg " />}
                        <div className=" md:w-[48%]">
                            <h1 className="text-[1.8rem] font-bold">{data.title}</h1>
                            <h2 className=" font-serif ">{data?.description}</h2> <a href={data.link} className=" font-semibold">Read more...</a>
                            

                        </div>

                    </div>
                )
            })



    );
}
