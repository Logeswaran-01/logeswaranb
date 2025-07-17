import React,{useState,useEffect,useRef} from 'react'
import './Projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'
import name from './name.jpg'
import Typed from 'typed.js'
import logo from './logo.jpg'


function Projects(){
   const [ mobileToggle , setMobileToggle ] = useState(false)
  
   const [ mobileToggle1 , setMobileToggle1 ] = useState(false)
    const [ mobileToggle2 , setMobileToggle2 ] = useState(false)
   const [ mobileToggle3 , setMobileToggle3 ] = useState(false)
   const ref1 = useRef(null);
   const typedRef1 = useRef(null); 

   useEffect(()=> {
     AOS.init({
       duration:1000,
       once:false
     })
   },[])

   useEffect(() => {
       const observer1 = new IntersectionObserver(
         ([entry]) => {
           if (entry.isIntersecting && !typedRef1.current) {
             typedRef1.current = new Typed(ref1.current, {
               strings: ['My Projects', 'My Work Showcase', 'My Builds', 'My Skill Showroom'],
            typeSpeed: 50,
             backSpeed: 60,
             backDelay: 1000,
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

   useEffect(() => {
    Swal.fire(
        {
            title: '',
            html: '<h2 style="font-size: 15px;padding-top:5x; font-family:Poppins,sans-serif">Tap on the <strong>card</strong> to see project details</h2>',
            position:'top-end',
            showConfirmButton:false,
            timer:4000,
            timerProgressBar:true,
            icon:'info',
            backdrop:false,
            background:' linear-gradient(135deg, #1f1c2c, #302b63, #24243e)',
            color:'#cccccc' ,
            toast:true,
            customClass:{
                popup:'info',
            }

        }
       

    )
   },[])

   const mobile1 = ()=> {
    setMobileToggle(!mobileToggle)
   }

   const mobile2 = () => {
    setMobileToggle1(!mobileToggle1)
   }

   const mobile3 = () => {
    setMobileToggle2(!mobileToggle2)
   }

   const mobile4 = () => {
    setMobileToggle3(!mobileToggle3)
   }

   return(
    <>
    <div >
        <h1 ref={ref1} className="typed-text"></h1>
        <div className={`wholeflick ${mobileToggle? 'flip':''}`} onClick={mobile1}>
        <div className='flip-inner'>
           <div className="flip-front">
            <h1>Style Grove</h1>
            <p>🛍️ Explore Style Grove – my sleek E-Commerce site for stylish shopping made simple! 💻✨</p>
            <button className='greater'>&gt;</button>
           </div>
           <div className="flip-back">
            <h1>Style Grove</h1>
            <p>An E-Commerce Website Built With JavaScript</p>
            <a href="https://style-grove-4tt5.vercel.app/"><button className='view'>View</button></a>
           </div>
        

    </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div >
       <div className={`wholeflick  ${mobileToggle1? 'flip':''} five`} onClick={mobile2}>
        <div className='flip-inner'>
           <div className="flip-front">
            <h1> Portfolio </h1>
            <p>A Portfolio Website To Showcase My Works</p>
            <button className='greater'>&gt;</button>
           </div>
           <div className="flip-back">
            <h1> Portfolio </h1>
            <p>My Portfolio Website Built With React Js And You Are Currently Viewing It</p>
            <a href="/"><button className='view'>View</button></a>
           </div>
        

    </div>
            </div>
    </div>
     
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<div >
  <div className={`wholeflick ${mobileToggle2? 'flip':''} ten`} onClick={mobile3} >
        <div className='flip-inner'>
           <div className="flip-front">
            <h1>Weather Detector</h1>
            <p>🌦️ Detects weather in real-time — temp, humidity & more!</p>
            <button className='greater'>&gt;</button>
           </div>
           <div className="flip-back">
            <h1>Weather Detector</h1>
            <p>Weather Detector Is Built With React JS Using Weather API</p>
            <a href="https://weather-detector-tan.vercel.app/"><button className='view'>View</button></a>
           </div>
        

    </div>
            </div>
</div>
     
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div >
            <div className={`wholeflick ${mobileToggle3? 'flip':''} fity`} onClick={mobile4} >
        <div className='flip-inner'>
           <div className="flip-front">
            <h1>To-Do List</h1>
            <p>📝 Plan it. Do it. Done it! ✅ My personal task tracker.</p>
            <button className='greater'>&gt;</button>
           </div>
           <div className="flip-back">
            <h1>To-Do List</h1>
            <p>To-Do List Is Built In React JS To Manage My Tasks</p>
            <a href="https://to-do-list-zi2h.vercel.app/"><button className='view'>View</button></a>
           </div>
        

    </div>
            </div>
            
    </div>
            </div>
             
     <div className='foo' >
             <h2>Made with 💜 By</h2>
             <img src={logo} className='log' alt="" />
     
    </div>
            
    
    </>
   )
}
export default Projects