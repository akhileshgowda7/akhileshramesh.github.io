import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import movieProject from './images/booking system.jpg'
import map4sciProject from './images/map4ci.png'
import shoppingProject from './images/shopping website.png'
import homeServices from './images/home-services.png'

let data = [
    {
        img : movieProject,
        disc : "The movie ticket booking web application allowed customers to browse available movies, select showtimes, choose seats, and purchase tickets online, while theater owners and administrators had access to a customizable management portal. Key features included real-time seat selection, secure payment processing, and a mobile-first design.",
        link: " https://drive.google.com/file/d/1F6dEC5qBYlcMiarvC4Ujdqgsi4dnRyi4/view"
    },
    {
      img : homeServices,
      disc : "The Home-Services website is developed using the MERN stack, comprising MongoDB for data storage, Express.js for server-side application logic, React.js for the frontend user interface, and Node.js for server-side JavaScript runtime. RESTful APIs are implemented using Express.js to facilitate communication between the client and server. The website incorporates responsive design principles and utilizes MongoDB as a scalable database to efficiently handle user data, service listings, reviews, and other relevant information",
      link:"https://github.com/akhileshgowda7/Home-Services"
  },
    {
      img : shoppingProject,
      disc : "This project was created using the popular web development stack of React, Express, Node, and MongoDB. As a full-stack developer, I utilized these technologies to build a responsive and user-friendly shopping website that allows users to browse and purchase products with ease. With a backend built on Node and Express, data is efficiently stored and retrieved from a MongoDB database, ensuring that the website can handle a large number of products and users. This project showcases my skills in full-stack web development and my ability to build robust, scalable web applications",
      link:"https://github.com/akhileshgowda7/React/tree/main/Shoping-Website"
  },
    {
        img :map4sciProject ,
        disc : "This project designs, implements, and deploys efficient algorithms for multi-level network representations that support interactive exploration by general audiences. Using the familiar Google map metaphor, the interactive visualizations make it easy to identify important nodes, major pathways, and clusters across multiple levels",
        link: "https://cns-iu.github.io/map4sci/home"
    },
   
];

var settings = {
  
  autoplay: true, 
  autoplaySpeed: 3000, 
  pauseOnHover: true, 
  swipeToSlide: true, 
  adaptiveHeight: true, 
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings} >
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #FF10F0;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
    &:hover {
      // Add hover effect
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  .back{
    left: -1rem;
  }
  .next {
    right: -1rem;
  }
`