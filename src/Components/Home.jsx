import React,{useEffect, useRef} from 'react';
import './Home.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import Typed from 'typed.js';
import download from './download.jpg'
import logo from './logo.jpg'
import { useInView } from 'react-intersection-observer';

function Home() {

   const scrollview = useRef()
   const scrollabout = useRef()
  const typedRef = useRef(null);

   const scroll_btn = () => {
    scrollview.current?.scrollIntoView({ behavior: 'smooth',
  block: 'center',
  inline: 'nearest'})
   }

   const about_me = () => {
    scrollabout.current?.scrollIntoView({
      behavior:'smooth',
      

    })
   }

   const morning = ()=> {
    let hours = new Date().getHours()
    if(hours < 12){
    return('Good Morning 🌥️')
    }
    else if(hours < 17){
      return 'Good Afternoon ☀️'
    }
    else{
      return 'Good Evening 🌙'
    }
    
   }
    

    useEffect(() => {
  let typedInstance = null;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !typedInstance) {
        typedInstance = new Typed(typedRef.current, {
          strings: ['Logeswaran', 'a Student', 'a Hardworker', 'a Developer'],
          typeSpeed: 50,
          backSpeed: 60,
          backDelay: 1500,
          loop: true,
          showCursor: false,
        });
      }
    },
    {
      threshold: .5, // Trigger when 50% of the element is visible
    }
  );

  if (typedRef.current) {
    observer.observe(typedRef.current);
  }

  return () => {
    if (typedInstance) {
      typedInstance.destroy();
    }
    if (typedRef.current) {
      observer.unobserve(typedRef.current);
    }
  };
}, []);

   useEffect(() => {
        AOS.init({
          duration:1500,
          once:false
        })
   },[])

  return (
    <>
      <section className='home' data-aos="fade-down-right" data-aos-easing='ease-in-out' data-aos-mirror='true'>
        <div >
             <h1 className='gradient-text'>Hi! Guys 🙋‍♂️</h1>
        <h3 className='gradient-text'>Welcome To My Portfolio</h3>
        <p className='gradient-text'>Are You More Curious To Know About Me?</p>
        <button onClick={scroll_btn} >Scroll Down</button>
         </div>
      </section>
       
          
       
        
       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <section className='section' ref={scrollview} data-aos="zoom-in-down" data-aos-easing='ease-in-out' data-aos-mirror='true'>
         <h1 className='pt-5'>{morning()} Guys</h1>
         <h1>I'm <span ref={typedRef} ></span></h1>
         <div className='resume-in'>
             <div className='resume'>
            <a href="https://res.cloudinary.com/dbrmvywb0/image/upload/v1752400551/pybep1vjj8wcfxle7fbt.pdf"><button className='button1'>Resume</button></a>
            <a href="https://logeswaran-tau.vercel.app/#/contact"><button className='button2' >Contact Me</button></a>
         </div>
         
         <div className='git-in'>
          <a href="https://www.linkedin.com/in/logeswaran123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><button>💼</button></a>
          <a href="https://github.com/Logeswaran-01"><button>🐱</button></a>
          
          </div>
         </div>
         
         

      </section>

     
     <div>
          <section  className='section-3-og' data-aos="zoom-in-up" data-aos-easing='ease-in-out' data-aos-mirror='true'>
        
        <div className='section-3'>
           <div className='section-3-div'>
          <h1>I'm Logeswaran</h1>
          <h3>A Student And Aspiring Fullstack Webdeveloper</h3>

          <div className='section-3-para'>
            <p>You've made it to the end of my homepage — but the real story starts now! 🎉🚀I’m Logeswaran — a passionate tech explorer, creative thinker, and lifelong learner 💻✨From building web apps to solving real-world problems, I love turning ideas into reality 🌍💡Curious to know what drives me, what I’ve built, and what’s next? Tap below and let’s go! 🔍🔥</p>
            
          </div>
          <a href="https://logeswaran-tau.vercel.app/#/about"><button>More About Me</button></a>
        </div>
        </div>
        
         <img src={download} className='download' alt="logeswaran" data-aos="flip-left" data-aos-easing='ease-in-out' data-aos-mirror='true'/> 
      </section>
       
     </div>
      <div className='footer'>
        <h2>Made with 💜 By</h2>
        <img src={logo} className='logo-img' alt=""  />

      </div>

     

    </>
  );
}

export default Home;
