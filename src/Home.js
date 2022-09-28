import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import SideBar from "./components/SideBar";

export function Home({ data }) {
  //technology
  const tech = data?.results.filter((value) => {
    const val = value.category[0].includes('technology')
    return val
  }
  )

      // Business
  const business = data?.results.filter((value) => {
    const val = value.category[0].includes('business')
    return val

  }
    )
      //entertainment
      const ent = data?.results.filter((value) => {
        const val = value.category[0].includes('entertainment')
        return val
    }
    )

    return (<div className="md:flex">
        <div className="md:w-[75%]">
            <Hero data={data} />
            {
                business.length > 0 &&
            <Section1 props={'business'} data={data} business = {business} />
            }
            {
                ent.length > 0 &&
            <Section2 props={'entertainment'} data={data}  ent={ent} />
            }
            
                {/* <Section1 props={'sport'} data={data} />  */}
            
            {
                tech.length > 0 &&
            <Section3 props={'Technology'} data={data} tech={tech} />
            }


        </div>
        <SideBar data={data} />
    </div>);
}
