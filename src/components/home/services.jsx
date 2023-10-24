import { coreServices, stylesServices, techsServices } from "@utils/svgIconsServices";
import Marquee from "react-fast-marquee";


const Services = () => {
    return (
        <section className=" bg-light-3 py-20">
            <h2 className="text-4xl font-semibold my-4 pb-12 text-center font-mySubheading ">My Services</h2>
            <Marquee className="h-32 py-4 flex items-center justify-evenly" pauseOnHover  >
                {coreServices.map((x, i) => {
                    return (
                        <a href={x.link} target="_blank" className="transition-all hover:animate-pulse " rel="noopener noreferrer" >
                            <div key={i} className={`inline-flex items-center justify-center shadow-2xl backdrop-saturate-100  max-h-4 px-3 h-4 mx-4  ${x.customClass}  ${i % 2 === 0 ? "translate-y-2" : "-translate-y-2"}`}>
                                {x.svg}
                                <h4 className={`text-5xl pl-2 font-myHeading ${x.customClass}`} >{x.title}</h4>
                            </div>
                        </a>
                    )
                })}
            </Marquee>
            <Marquee direction="right" className="h-32 py-4 flex items-center justify-evenly" pauseOnHover  >
                {techsServices.map((x, i) => {
                    return (
                        <a href={x.link} target="_blank" className="transition-all hover:animate-pulse " rel="noopener noreferrer" >
                            <div key={i} className={`inline-flex items-center justify-center shadow-2xl backdrop-saturate-100  max-h-4 px-3 h-4 mx-4  ${x.customClass}  ${i % 2 === 0 ? "translate-y-2" : "-translate-y-2"}`}>
                                {x.svg}
                                <h4 className={`text-5xl pl-2 font-myHeading ${x.customClass}`} >{x.title}</h4>
                            </div>
                        </a>
                    )
                })}
            </Marquee>
            <Marquee className="h-32 py-4 flex  items-center justify-evenly" pauseOnHover  >
                {stylesServices.map((x, i) => {
                    return (
                        <a href={x.link} target="_blank" className="transition-all hover:animate-pulse " rel="noopener noreferrer" >
                            <div key={i} className={`inline-flex items-center justify-center shadow-2xl backdrop-saturate-100  max-h-4 px-3 h-4 mx-4  ${x.customClass}  ${i % 2 === 0 ? "translate-y-2" : "-translate-y-2"}`}>
                                {x.svg}
                                <h4 className={`text-5xl pl-2 font-myHeading ${x.customClass}`} >{x.title}</h4>
                            </div>
                        </a>
                    )
                })}
            </Marquee>
        </section>
    );
};

export default Services;
