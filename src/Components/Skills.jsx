import React,{useState,useEffect,useRef} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import logo from './logo.jpg'
import './Skills.css'
import Typed from 'typed.js'
import { useInView } from 'react-intersection-observer';

function Skills(){
    const ref1 = useRef(null);
    const typedRef1 = useRef(null);
    useEffect(() => {

      AOS.init({
        duration:1500,
        once:false
      })   
    },[])

     useEffect(() => {
        const observer1 = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !typedRef1.current) {
              typedRef1.current = new Typed(ref1.current, {
                strings: ['My Skills', 'My Strengths', 'My Competencies', 'My Superpowers'],
             typeSpeed: 50,
              backSpeed: 60,
              backDelay: 1500,
              loop: true,
              showCursor: false,
              });
            }
          },
          {
            threshold: 0.5,
          }
        );
    
        if (ref1.current) {
          observer1.observe(ref1.current);
        }
    
        return () => {
          if (typedRef1.current) {
            typedRef1.current.destroy();
            typedRef1.current = null;
          }
          if (ref1.current) {
            observer1.unobserve(ref1.current);
          }
        };
      }, []);

   return(
    <>
    
    <div className='hello' data-aos='fade-down-right' data-aos-easing='ease-in-out' data-aos-mirror = 'true'>
   
    <div className='container one' >
        <h1>Programming Languages</h1>
        <div className='row language'>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-right' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">Python</h3>
            </div>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-right' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">Java</h3>
            </div>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-right' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">Javascript</h3>
            </div>
            
        </div>
    </div>
   
    </div>
    <br /><br /><span className='br'><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></span>
    <div className='hello1' data-aos='fade-up-left' data-aos-easing='ease-in-out' data-aos-mirror = 'true'>
    <div className='container one' >
        <h1>Web Technology</h1>
        <div className='row language'>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-left' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">Html</h3>
            </div>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-left' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">CSS</h3>
            </div>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-left' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">Bootstrap</h3>
            </div>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-left' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">Tailwind CSS</h3>
            </div>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-left' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">React</h3>
            </div>
            
        </div>
    </div>
   
    </div>
    <br /><br /><span className='br'><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></span>
    <div className='hello2' data-aos='fade-up-right' data-aos-easing='ease-in-out' data-aos-mirror = 'true'>
    <div className='container one' >
        <h1>Backend</h1>
        <div className='row language'>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-right' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">Flask</h3>
            </div>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-right' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">Express Js</h3>
            </div>
           
            
        </div>
    </div>
   
    </div>
   <br /><br /><span className='br'><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></span>
    <div className='hello3' data-aos='fade-up-left' data-aos-easing='ease-in-out' data-aos-mirror = 'true'>
    <div className='container one' >
        <h1>Tools</h1>
        <div className='row language'>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-left' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">Git Hub</h3>
            </div>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-left' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">Git</h3>
            </div>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-left' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">VS Code</h3>
            </div>
            
            
            
        </div>
    </div>
   
    </div>
    <br /><br /><br /><br /><br /><br /><br /><span className='br'><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></span>
    <div className='hello2' data-aos='fade-up-right' data-aos-easing='ease-in-out' data-aos-mirror = 'true'>
    <div className='container one' >

    <h1>Data Base</h1>
        <div className='row language'>
            <div className='card col-lg-3 col-sm-1'data-aos='flip-right' data-aos-easing='ease-in-out' data-aos-mirror = 'true' data-aos-delay='1000'>
              <h3 className="card-title two ">Mongo DB</h3>
            </div>
           
            
        </div>
    </div>
   
    </div>
    <br /><br /><br /><span className='br'><br /><br /><br /><br /><br /><br /></span>
    <div className='foot2' >
            <h2>Made with 💜 By</h2>
            <img src={logo} className='logo-img1' alt="" />
    
          </div>
    
    </>
    
   )
}

export default Skills