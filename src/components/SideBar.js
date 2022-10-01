
import { useState } from 'react';
import { Display } from './pages/Display';


export default function SideBar({ data }) {
    const [displayData, setDisplayData] = useState([]);
    const [readMore, setReadMore] = useState(false);


    const top = data?.results.filter((value) => {
        const val = value.category[0].includes('top')
        return val

    }
    )
    const getId = (id) => {
        console.log(top)
        setDisplayData(top[id + 2])
        setReadMore(!readMore)
    }

    const getFirstId = (id) => {
        console.log(id)
        setDisplayData(top[id + 1])
        setReadMore(!readMore)
    }



    return (<div className="md:w-[15%] flex-1  p-[1rem] py-[2rem] ">
        <h1 className="font-semibold text-center border border-border mb-[1rem] font-header text-[1.3rem] ">Top Stories</h1>
        {
            data && top
                .slice(1, 2).map((data, id) => {
                    return (
                        <div className={data.image_url ? "w-full relative" : 'w-full'} key={id}>
                            {data.image_url &&
                                <img src={data.image_url} alt="" srcSet="" className=" h-[12rem] w-full object-cover shadow-lg border border-border rounded" />}
                            <div className={data.image_url ? "text-center absolute bottom-[1.5rem] w-full bg-border p-[.5rem] text-white font-semibold text-[.75rem] " : ' font-semibold mb-[1rem]'}>{data.title}</div>
                            <button className=" py-2 mt-[1rem]   rounded" onClick={() => getFirstId(id)}>
                                Read more...
                            </button>
                        </div>
                    )
                })
        }


        {
            data && top
                .slice(2, 8).map((data, id) => {
                    return (
                        <div className="py-[1rem] border-t border-t-border " key={id} >
                            {data.image_url &&
                                <img src={data.image_url} alt="" className=" w-[7rem] h-[7rem] float-left shadow-lg border border-border rounded mr-[1rem] object-cover " />}
                            <h1 className="font-semibold my-[1rem]">{data.title}</h1>
                            <p className="text-[.85rem] font-serif ">{data.description}</p>
                            <button className=" py-2 mt-[1rem]   rounded" onClick={() => getId(id)}>
                                Read more...
                            </button>
                        </div>

                    )
                })
        }

        {
            readMore &&
            <Display setReadMore={setReadMore} readMore={readMore} displayData={displayData} />
        }



    </div>);
}

