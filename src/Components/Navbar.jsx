import React,{useState,useEffect} from 'react'
import {Link,useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Navbar(){
    
    const [mobile , setMobile ] = useState(false)
    const [ animation , setAnimation ] = useState(false) 
    const location = useLocation()
 
    
    const mobile_menu = () => {
       
        setAnimation(true)
         setMobile(true)
    }

    const mobile_cross = () => {
        
        setAnimation(false)
        setMobile(false)
    }
  
    const handleOnClick = () => {
        
        setAnimation(false)
        setMobile(false)
    }
    
    
    useEffect(() => {
       AOS.init({
        duration:1000,
        once:false
       })
    },[])

   return(
    <>
    
        <div className='whole'>
             <h1 className='name'>LOGESWARAN</h1>
             <nav  className='nav_bar d-none d-md-block pt-md-4'>
           
            
              <Link to='/' onClick={handleOnClick} className={location.pathname === '/'? 'link-active':'link'}>Home</Link>
              <Link to='/about' onClick={handleOnClick} className={location.pathname === '/about'? 'link-active':'link'}>About</Link>
              <Link to='/skills' onClick={handleOnClick} className={location.pathname === '/skills'? 'link-active':'link'}>Skills</Link>
              <Link to='/projects' onClick={handleOnClick} className={location.pathname === '/projects'? 'link-active':'link'}>Projects</Link>
              <Link to='/contact' onClick={handleOnClick} className={location.pathname === '/contact'? 'link-active':'link'}>Contact</Link>
              
           </nav>
          <button onClick={mobile_menu} className=' menu_toggle'>≡</button>
           
         </div>
         {mobile && <div className={animation?'mobile-menu':'mobileMenu'} data-aos='fade-up-right' data-aos-easing='ease-in-out'>
             <button onClick={mobile_cross} className='cross'>&times;</button>
             <nav  className='nav-links'>
              <Link to='/'onClick={handleOnClick}   className={location.pathname === '/'? 'link-actives':'links'}>Home</Link>
              <Link to='/about'onClick={handleOnClick}  className={location.pathname === '/about'? 'link-actives':'links'}>About</Link>
              <Link to='/skills'onClick={handleOnClick}  className={location.pathname === '/skills'? 'link-actives':'links'}>Skills</Link>
              <Link to='/projects'onClick={handleOnClick}  className={location.pathname === '/projects'? 'link-actives':'links'}>Projects</Link>
              <Link to='/contact'onClick={handleOnClick}  className={location.pathname === '/contact'? 'link-actives':'links'}>Contact</Link>
              
             </nav>
            
            
         </div>}
         
    
       
    </>
    
   )
}

export default Navbar