import React,{useEffect} from 'react'
import './Contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import logo from './logo.jpg'
import Swal from 'sweetalert2'

function Contact(){

    useEffect(()=> {
      AOS.init({
         duration:1000,
         once:false
      })
    },[])

    useEffect(() => {
        Swal.fire(
            {
                title: '',
                html: '<h2 style="font-size: 15px;padding-top:5x; font-family:Poppins,sans-serif">Fill the <strong>form</strong> to contact me</h2>',
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

   return(
    <>
    <div className='contact' data-aos='zoom-in'>
        
        <form action="https://api.web3forms.com/submit" method='POST'>
           <input type="hidden" name='access_key' value='1a5d3c3f-dd32-4de3-bb3a-e355e1ad7b93'/><br /><br />
           <div className='class'>
               <label >Name : </label>
               <input className='name1' type="text" name='name'  required/><br /><br />
           </div>
           <div className='class'>
            <label htmlFor="">Email Id : </label>
            <input className='email' type="email" name='email'  required /><br /><br />
           </div>
           <div className='class'>
            <label htmlFor="">Message : </label>
           <textarea name="message" required></textarea><br /><br />
           </div >
           <button type='submit' className='submit-button'>Submit</button><br /><br />
        </form>
    </div>
   <br /><br /><br />
    <div className='foo'>
                <h2>Made with 💜 By</h2>
                <img src={logo} className='logo-imgten'  alt="" />
        
              </div>
        
    </>
   )
}
export default Contact