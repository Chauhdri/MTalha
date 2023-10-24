import React from 'react';

const WhatsappSVG = <svg xmlns="http://www.w3.org/2000/svg" height="2em" fill='#fff' viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>

const Hero = () => {
    return (
        <div
            className=" bg-cover bg-center min-w-full bg-gray-100 max-w-full min-h-full h-auto max-h-max col-auto flex-col text-center flex items-start justify-center"
            style={{
                backgroundImage: "url('/assets/svg/homeCover.svg')",
            }}
        >
            <div className="text-white  pt-24 pb-52 mb-14 ">
                
                <img src='/assets/images/my.png' className='h-auto  w-36 rounded-full border-b-black filter drop-shadow-2xl border-opacity-50 shadow-md mx-auto mb-4' />
                <h1 className="text-3xl md:text-6xl font-myHeading2 leading-7 tracking-wider font-extrabold mb-4 text-black ">MYABABEEL <br />
                    <span className='text-xl font-mySubheading font-bold tracking-wide text-gray-200 ' >Software Solutions</span> </h1>
                <p className="text-md md:text-xl font-myParagrapgh text-white text-justify mx-auto mt-6 mb-12 px-4">Innovating the Web: Crafting Apps, Websites, and SEO Strategies that Shine</p>
                <div className='inline-flex row-auto' >
                    <button className="py-2 px-2 rounded-3xl shadow-md bg-wp font-bold">
                        {WhatsappSVG}
                    </button>
                    <button className="py-2 px-6 mx-2 font-myHeading2  bg-black hover:bg-white hover:text-black text-white rounded-3xl text-lg transition-colors duration-300">
                        Get a Quote
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Hero;



