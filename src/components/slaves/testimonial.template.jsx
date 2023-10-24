import React from 'react';


const location = <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64" className="fill-current" enableBackground="new 0 0 64 64" xmlSpace="preserve">
    <g>
        <path d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64
 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14
 s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z"/>
        <path d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34
 c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z"/>
    </g>
</svg>
const website = <svg viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" strokeWidth="1" className="fill-current" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-265.000000, -3644.000000)" className="fill-current">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M209,3492 L209,3494 L210.971803,3494 C210.971803,3492.895 210.089421,3492 209,3492 M209,3488 L209,3490 C210.971803,3490 213.08459,3492 213.08459,3494 L215.056394,3494 C215.056394,3491 211.957705,3488 209,3488 M219,3494 L217.028197,3494 C217.028197,3490 212.943606,3486 209,3486 L209,3484 C213.929508,3484 219,3488 219,3494" id="rss-[#1023]">
                </path>
            </g>
        </g>
    </g>
</svg>
const externalLink = <svg viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" className="fill-current" /></svg>

const chipsColor = [
    'bg-chips-4',
    'bg-chips-5',
    'bg-chips-3',
    'bg-chips-1',
    'bg-chips-2',
    'bg-chips-6',
]

const testimonialsColors = [
    "#08085E",
    "#26001B",
    "#3B0000",
    "#2E0249",
    "#007965",
    "#6528F7",
    "#C70039",
    "#F94C10",
    "#30E3CA",
]
const themeBorder = [
    'border-testimonials-1',
    'border-testimonials-2',
    'border-testimonials-3',
    'border-testimonials-4',
    'border-testimonials-5',
    'border-testimonials-6',
    'border-testimonials-7',
    'border-testimonials-8',
    'border-testimonials-9',
    'border-testimonials-10',
    'border-testimonials-11',
    'border-testimonials-12',
]
const themeBg = [
    'bg-testimonials-1',
    'bg-testimonials-2',
    'bg-testimonials-3',
    'bg-testimonials-4',
    'bg-testimonials-5',
    'bg-testimonials-6',
    'bg-testimonials-7',
    'bg-testimonials-8',
    'bg-testimonials-9',
    'bg-testimonials-10',
    'bg-testimonials-11',
    'bg-testimonials-12',
]
const Testimonial = (({ x, i }) => {
    const svgBackgrounds = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="${testimonialsColors[i]}" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,176C480,160,600,96,720,106.7C840,117,960,203,1080,224C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>`;
    return (
        <div key={i} className={`h-auto max-h-fit   container-sm max-w-xl w-xl `} >
            <div className={`py-6 px-8 bg-white bg-opacity-80 w-full items-center border-t-8 ${themeBorder[i]} flex flex-col sm:flex-row `}>
                <div
                    className=" w-32 h-32 rounded-full mr-4  bg-cover bg-center"
                    style={{ backgroundImage: `url('/assets/images/user.png')` }}
                >
                    <img
                        src={x.avatar}
                        alt={x.name}
                        className=" w-full h-full text-white bg-transparent"
                    />
                </div>
                <div className=" p-2 flex flex-col">
                    <h3 className="text-3xl font-myHeading2 ">{x.name}</h3>
                    <p className="font-mySubheading text-2xl" >
                        <span className="inline-block w-4 mr-2 text-teal" >{location}</span>
                        {x.country}
                    </p>
                    {x.products.map((y, j) => {
                        return (
                            <p key={j} className="font-mySubheading text-sm" >
                                <span className="inline-block w-2 mr-2 text-teal" >{website}</span>
                                {y.link}
                                <span className="inline-block w-2 ml-2 text-black" >{externalLink}</span>
                            </p>
                        )
                    })}
                </div>
            </div>
            <div className="pb-4 pt-8  bg-white bg-opacity-80 "  >
                <div id="divider" className=" w-full" >&nbsp;</div>
                <div className="flex items-center justify-center w-full px-auto" >
                    <div className="rounded-full flex flex-col items-center justify-evenly absolute  bg-white border-4 w-24 h-24  border-orange-400 border-double" >
                        <img src="/assets/svg/like.svg" className=" w-10 h-10   " />
                        <span className="font-mySubheading text-teal font-semibold text-4xl -translate-y-2" >{x.Recomended}%</span>
                    </div>
                </div>
                <div className="flex flex-row items-center text-center justify-between mx-0 mt-2 sm:mt-0 sm:mx-6 font-myParagrapgh" >
                    <p><b className="font-myHeading2 text-green font-light text-2xl" > {x.Recomended}%</b><br />Refer to a Friend</p>
                    <p><b className="font-myHeading2 text-green font-light text-2xl" > {x.ReHire}%</b><br />Want to Hire Again</p>
                </div>
                <div id="divider" className="mb-2 w-full  " >&nbsp;</div>
                <div className="space-x-2  max-w-screen-sm mx-4  ">
                    {x.serviceAvailed.map((y, j) => <span key={j} className={`${chipsColor[j]} bg-opacity-60 inline-block min-w-max my-1 px-2 py-1  font-myParagrapgh text-sm rounded-full`}>{y}</span>)}
                </div>
            </div>
            <div
                className={`bg-white bg-opacity-80 h-max sm:h-96 flex items-end pt-14 `}
                style={{
                    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgBackgrounds)}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% auto',
                    backgroundPositionY: 'top',
                }}
            >
                <div className={` ${themeBg[i]} mt-4 h-96 w-full sm:h-72  pt-8 pb-6 px-4`} >
                    <p className={`py-2 mt-2 mb-10 px-2 mx-2 text-justify font-myComments text-white text-3xl ${themeBg[i]} `}>
                        <i className='text-5xl font-myHeading2' >"</i>
                        {x.comments}
                        <i className='text-5xl font-myHeading2' >"</i>
                    </p>
                    <div className='my-4 mx-4' >
                        {x.professionalism.map((y, j) => (
                            <i key={j} className={`bg-gray-900 mx-1 text-white inline-block min-w-max my-1 px-3 py-1 font-myParagrapgh text-sm rounded-full`}>
                                {y.title}
                            </i>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
})
// 

export default Testimonial