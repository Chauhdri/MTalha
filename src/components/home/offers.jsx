import { coreServices, techsServices } from '@utils/svgIconsServices';
import React from 'react';
import styles from '@slaves/offers.module.css'

const solidColors = [
    'bg-priceBg-1',
    'bg-priceBg-2',
    'bg-priceBg-3 ',
    'bg-priceBg-4',
    'bg-priceBg-5',
    'bg-priceBg-6',
    'bg-priceBg-7',
    'bg-priceBg-8',
]

const solidBorders = [
    'border-priceBg2-1',
    'border-priceBg2-2',
    'border-priceBg2-3',
    'border-priceBg2-4',
    'border-priceBg2-5',
    'border-priceBg2-6',
    'border-priceBg2-7',
    'border-priceBg2-8',
]
// bg-gradient-to-br from-light-1 via-light-1  to-light-5  bg-gradient-to-b from-black to-gray-900
const PackageCard = ({ offer, i }) => {
    return (
        <div className={` flex flex-col shadow-2xl h-72 text-white max-w-full border-double border-4 mb-4  `}
        style={{background: 'linear-gradient(135deg, #000000, #333333, #000000)',}}
        >
            <div className="flex flex-row  h-72  max-w-fullshadow mb-4">
                <div className='h-32 w-auto p-4' >{offer.icon}</div>
                <div className='flex flex-col w-full' >
                    <div className={`transition-all duration-1000 ease-in-out rounded-sm border-2  border-dashed text-white flex flex-row items-center justify-between -translate-y-8 translate-x-2  px-2 py-6 w-full border-gradient ${styles['gradient-switch-animation']}`}>
                        <div className='flex flex-col' >
                            <h2 className="text-md font-semibold font-myHeading2">{offer.title}</h2>
                            <h3 className="text-md font-mySubheading">{offer.subTitle}</h3>
                        </div>
                        <div className='flex flex-col justify-center items-end' >
                            {offer.sale.available && <p className={`text-2xl font-bold font-myHeading2`}>${Math.ceil(offer.startingPrice * (1 - (offer.sale.discount / 100)))}</p>}
                            <p className={`${offer.sale.available ? "text-lg line-through" : "text-2xl font-bold"}  font-myHeading2`}>${offer.startingPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="text-gray-300 -translate-y-6 ml-4">
                {offer.includes.map((y, i) => <li key={i} className='flex flex-row items-center font-myParagrapgh' >
                    <svg
                        className='h-3 w-auto text-orange-400 mr-2'
                        viewBox="0 0 120 120"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <path className='stroke-2 stroke-current fill-current' d="m 30.522722,109.64914 c 0,0 14.442413,-23.019398 29.827776,-38.389045 C 83.32238,48.311677 101.67428,36.941589 118.58567,25.599121 109.12404,29.722388 84.270204,43.316848 60.823954,64.326392 44.449191,78.999369 30.680541,100.51694 30.680541,100.51694 c 0,0 -16.570986,-21.815796 -28.8808606,-39.065498 z" />
                    </svg>
                    {y}
                </li>
                )}
            </ul>
            <div id="divider" className="mb-2 w-full " >&nbsp;</div>
            <p className='text-center text-xl font-semibold font-myHeading3' >
                {
                    offer.sale.available ?
                        <span>
                            {offer.sale.discount}% <span className='font-mySubheading text-lg' > Sale, Last</span>  {offer.sale.counts} <span className='font-mySubheading text-lg' >items.</span>
                        </span>
                        : <span className='font-mySubheading text-lg' >Discounted Items Sold.</span>
                }
            </p>

        </div>

    );
};

const preDefinedOffers = [
    {
        title: 'Website Frontend',
        subTitle: 'React JS App',
        startingPrice: 99,
        bookingLink: 'https://yourbookinglink.com/react',
        icon: techsServices[0].svg,
        includes: [
            'Responsive UI/UX Design',
            'React Component Development',
            'Integration with APIs',
            'Basic SEO Optimization',
        ],
        sale: {
            available: true,
            deadline: '2023-12-31',
            discount: 15,
            counts: 45,
        },
    },
    {
        title: 'Website Development',
        subTitle: 'Next JS App',
        startingPrice: 150,
        bookingLink: 'https://yourbookinglink.com/next',
        icon: techsServices[1].svg,
        includes: [
            'Server-side Rendering (SSR)',
            'Page Performance Optimization',
            'Interactive Animations',
            'Google Analytics Integration',
        ],
        sale: {
            available: false,
            deadline: '',
            discount: 0,
            counts: 0,
        },
    },
    {
        title: 'Backend Development',
        subTitle: 'Express JS App',
        startingPrice: 150,
        bookingLink: 'https://yourbookinglink.com/express',
        icon: techsServices[2].svg,
        includes: [
            'API Development & Integration',
            'Database Management',
            'User Authentication',
            'API Documentation',
        ],
        sale: {
            available: true,
            deadline: '2023-09-15',
            discount: 10,
            counts: 30,
        },
    },
    {
        title: 'Essential SEO Package',
        subTitle: 'On-Page & Technical',
        startingPrice: 150,
        bookingLink: 'https://yourbookinglink.com/seo',
        icon: coreServices[3].svg,
        includes: [
            'Keyword Research & Analysis',
            'Title & Meta Tag Optimization',
            'Site Speed Optimization',
            'XML Sitemap Setup',
        ],
        sale: {
            available: true,
            deadline: '2023-11-30',
            discount: 20,
            counts: 50,
        },
    },
    {
        title: 'Mobile App Development',
        subTitle: 'React Native ',
        startingPrice: 200,
        bookingLink: 'https://yourbookinglink.com/mobile',
        icon: techsServices[3].svg,
        includes: [
            'Cross-platform Development',
            'UI/UX Design for Mobile',
            'API Integration',
            'Basic App Testing',
        ],
        sale: {
            available: false,
            deadline: '',
            discount: 0,
            counts: 0,
        },
    },
    {
        title: 'Structured Data',
        subTitle: 'Schema Markup',
        startingPrice: 100,
        bookingLink: 'https://yourbookinglink.com/schema',
        icon: coreServices[1].svg,
        includes: [
            'Schema Markup Setup',
            'Structured Data Integration',
            'Rich Snippet Enhancement',
        ],
        sale: {
            available: true,
            deadline: '2023-10-20',
            discount: 25,
            counts: 25,
        },
    },
];

const Offers = () => {
    return (
        <div className="mx-auto py-32 " style={{
            backgroundImage: `url("assets/images/2.jpg")`,
            backgroundSize: '372px auto ',
        }}>
            <h2 className="text-4xl font-semibold my-4 pb-24 text-center font-mySubheading ">Starting Prices</h2>
            <div className="lg:container grid items-center justify-center mx-auto gap-16 lg:grid-cols-2">
                {preDefinedOffers.map((pkg, index) => (
                    <PackageCard key={index} offer={pkg} i={index} />
                ))}
            </div>
        </div>
    );
};

export default Offers;
