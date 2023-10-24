'use client'
import Testimonial from "@slaves/testimonial.template";
import React from "react";
import Slider from "react-slick";
const serviceAvailed = ['Website Development, Website Maintainance, Website Updates, React JS SEO, Next JS SEO, Web Performance Optimization, Android App Development, iOS App Development, Backend App Development, Backend Integration, Schema Markup ']
const professionalism = ["Clear Communication", "Timely Responses", "Expert Guidance", "Attentive Listening", "Problem Solving", "Reliable Support", "Personalized Approach", "Dedication to Quality", "Excellent Collaboration"];
const reviews = [
  {
    name: "John Doe",
    comments: "I'm amazed by the quality of their work!",
    avatar: "john-doe-avatar.jpg",
    country: 'USA',
    Recomended: 100,
    Experience: 90,
    ReHire: 100,
    products: [
      {
        title: 'Watches e-commerce',
        link: 'ww.example.com'
      },
      {
        title: 'Watches',
        link: 'ww.example.com'
      },
    ],
    professionalism: [
      {
        title: "Clear Communication",
        rate: 100,
      },
      {
        title: "Timely Responses",
        rate: 100,
      },
      {
        title: "Expert Guidance",
        rate: 100,
      }
    ],
    serviceAvailed: ['Frontend Development', 'Backend Integration', 'Schema Markup', 'Web Performance Optimization', 'SEO', 'Mobile Apps Development']
  },
  {
    name: "John Doe",
    comments: "I'm amazed by the quality of their work!",
    avatar: "john-doe-avatar.jpg",
    country: 'USA',
    Recomended: 100,
    Experience: 90,
    ReHire: 100,
    products: [
      {
        title: 'Watches e-commerce',
        link: 'ww.example.com'
      },
      {
        title: 'Watches',
        link: 'ww.example.com'
      },
    ],
    professionalism: [
      {
        title: "Clear Communication",
        rate: 100,
      },
      {
        title: "Timely Responses",
        rate: 100,
      },
      {
        title: "Expert Guidance",
        rate: 100,
      }
    ],
    serviceAvailed: ['Frontend Development', 'Backend Integration', 'Schema Markup', 'Web Performance Optimization', 'SEO', 'Mobile Apps Development']
  }, {
    name: "John Doe",
    comments: "I'm amazed by the quality of their work!",
    avatar: "john-doe-avatar.jpg",
    country: 'USA',
    Recomended: 100,
    Experience: 90,
    ReHire: 100,
    products: [
      {
        title: 'Watches e-commerce',
        link: 'ww.example.com'
      },
      {
        title: 'Watches',
        link: 'ww.example.com'
      },
    ],
    professionalism: [
      {
        title: "Clear Communication",
        rate: 100,
      },
      {
        title: "Timely Responses",
        rate: 100,
      },
      {
        title: "Expert Guidance",
        rate: 100,
      }
    ],
    serviceAvailed: ['Frontend Development', 'Backend Integration', 'Schema Markup', 'Web Performance Optimization', 'SEO', 'Mobile Apps Development']
  },
  {
    name: "John Doe",
    comments: "I'm amazed by the quality of their work!",
    avatar: "john-doe-avatar.jpg",
    country: 'USA',
    Recomended: 100,
    Experience: 90,
    ReHire: 100,
    products: [
      {
        title: 'Watches e-commerce',
        link: 'ww.example.com'
      },
      {
        title: 'Watches',
        link: 'ww.example.com'
      },
    ],
    professionalism: [
      {
        title: "Clear Communication",
        rate: 100,
      },
      {
        title: "Timely Responses",
        rate: 100,
      },
      {
        title: "Expert Guidance",
        rate: 100,
      }
    ],
    serviceAvailed: ['Frontend Development', 'Backend Integration', 'Schema Markup', 'Web Performance Optimization', 'SEO', 'Mobile Apps Development']
  },
  {
    name: "John Doe",
    comments: "I'm amazed by the quality of their work!",
    avatar: "john-doe-avatar.jpg",
    country: 'USA',
    Recomended: 100,
    Experience: 90,
    ReHire: 100,
    products: [
      {
        title: 'Watches e-commerce',
        link: 'ww.example.com'
      },
      {
        title: 'Watches',
        link: 'ww.example.com'
      },
    ],
    professionalism: [
      {
        title: "Clear Communication",
        rate: 100,
      },
      {
        title: "Timely Responses",
        rate: 100,
      },
      {
        title: "Expert Guidance",
        rate: 100,
      }
    ],
    serviceAvailed: ['Frontend Development', 'Backend Integration', 'Schema Markup', 'Web Performance Optimization', 'SEO', 'Mobile Apps Development']
  }, {
    name: "John Doe",
    comments: "I'm amazed by the quality of their work!",
    avatar: "john-doe-avatar.jpg",
    country: 'USA',
    Recomended: 100,
    Experience: 90,
    ReHire: 100,
    products: [
      {
        title: 'Watches e-commerce',
        link: 'ww.example.com'
      },
      {
        title: 'Watches',
        link: 'ww.example.com'
      },
    ],
    professionalism: [
      {
        title: "Clear Communication",
        rate: 100,
      },
      {
        title: "Timely Responses",
        rate: 100,
      },
      {
        title: "Expert Guidance",
        rate: 100,
      }
    ],
    serviceAvailed: ['Frontend Development', 'Backend Integration', 'Schema Markup', 'Web Performance Optimization', 'SEO', 'Mobile Apps Development']
  }, {
    name: "John Doe",
    comments: "I'm amazed by the quality of their work!",
    avatar: "john-doe-avatar.jpg",
    country: 'USA',
    Recomended: 100,
    Experience: 90,
    ReHire: 100,
    products: [
      {
        title: 'Watches e-commerce',
        link: 'ww.example.com'
      },
      {
        title: 'Watches',
        link: 'ww.example.com'
      },
    ],
    professionalism: [
      {
        title: "Clear Communication",
        rate: 100,
      },
      {
        title: "Timely Responses",
        rate: 100,
      },
      {
        title: "Expert Guidance",
        rate: 100,
      }
    ],
    serviceAvailed: ['Frontend Development', 'Backend Integration', 'Schema Markup', 'Web Performance Optimization', 'SEO', 'Mobile Apps Development']
  },

];

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
const TestimonialsSection = () => {
  const sliderRef = React.useRef(null);
  const centerSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  const [activeSlide, setActiveSlide] = React.useState(0);
  const settings = {
    infinite: true,
    speed: 1200,
    swipeToSlide: true,
    slidesToShow: 3,
    centerMode: true,
    beforeChange: (currentSlide, nextSlide) => {
      console.log(currentSlide, nextSlide, activeSlide)
      setActiveSlide(nextSlide);
    },
    slidesToScroll: 2,
    responsive: [
      // {
      //   breakpoint: 1280,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //   },
      // },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <section className="bg-gray-100 bg-cover bg-bottom py-12 " style={{ backgroundImage: "url('/assets/images/testimonials-bg.jpg')" }} >
      <div className="mx-auto ">
        <h2 className="text-4xl font-semibold my-4 py-12 text-center font-mySubheading ">Customer Reviews</h2>
        <Slider
          {...settings} ref={sliderRef}
          arrows={false}
          className="flex items-center justify-evenly "
        >
          {reviews.map((testimonial, index) => (
            <div className={`px-3 flex items-stretch ${index === activeSlide ? 'scale-100' : 'scale-90'} cursor-pointer  ease-in-out duration-300 transition-all `} onClick={() => centerSlide(index)}  key={index} >
              <Testimonial i={index} x={testimonial} />
            </div>
          ))}
        </Slider>

        <div className="flex items-center justify-around w-min mx-auto mt-8 " >
          {reviews.map((_, index) => (
            <button key={index} onClick={() => centerSlide(index)} className="flex mx-auto " >
              <span className={`h-2 pt-1 pl-1 mx-1 rounded-2xl     ${index === activeSlide ? `w-20 ${themeBg[activeSlide]} ` : `w-2 `} border-2 ${themeBorder[activeSlide]} border  cursor-pointer transition-all `}></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
