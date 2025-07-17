import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import './About.css';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import download from './download.jpg';
import logo from './logo.jpg';
import profile from './profile.jpg';

function About() {
  const ref = useRef(null);
  const typedRef = useRef(null); 

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !typedRef.current) {
          typedRef.current = new Typed(ref.current, {
            strings: ['Me', 'Myself', 'My Passion', 'My Career'],
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
        typedRef.current = null;
      }
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className='lorem' data-aos="fade-down" data-aos-easing='ease-in-out' data-aos-mirror='true'>
        <h1>About <span ref={ref}></span></h1>
        <h3>"Hey, I’m not just a bunch of code and colors – there’s a story here. Let’s dive in! 🧠💡"</h3>
        <h4>Hi there! 👋 I’m Logeswaran — a passionate learner 💡, creative builder 🛠️, and future-ready full-stack web developer 💻.</h4>

        <p>
          Ever since I wrote my first line of code 👨‍💻, I’ve been fascinated by how imagination turns into functionality ✨. I love the magic of the web 🌐 — where logic meets design 🎨 and creativity meets code 🔥. Whether it’s building smooth frontends with React ⚛️, crafting powerful APIs with Flask 🐍, or working with MongoDB 🍃, I enjoy turning ideas into real, interactive experiences 🚀.
          <br /><br />
          But I’m not just about code 👾. I believe in learning by doing 🧠 — I dive into projects 🧩, tackle bugs 🐛, and grow through every challenge 🎮. Every bug is a lesson, and every feature is a step closer to mastery 🎯.
          <br /><br />
          Outside the dev world, my hobbies keep me inspired 🎧✏️. I love listening to music 🎶 (it powers my coding sessions), watching tech content 📱 to stay updated, and creating digital art 🖌️ to flex my creative side. Whether it's sketching UI layouts or experimenting with animations, I enjoy blending art with logic 🎭.
        </p>
      </div>

      <img src={download} className='image' data-aos-easing='ease-in-out' data-aos-mirror='true' data-aos="flip-right" alt="project preview" />

      <div className='lorem1' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-mirror='true'>
        <h3>🔮 What’s Next?</h3>
        <p>
          I’m not here just to build projects — I’m here to build a career, a future, and impact 🌍.
          My dream is to work as a software engineer at a leading tech company 🏢, where I can learn from the best, solve real-world problems, and contribute to products that reach millions 🧑‍🚀.
          <br /><br />
          In the long run, I hope to start my own tech venture 💼, create tools that empower others, and mentor upcoming developers like me 🤝.
          <br /><br />
          The road ahead is long, but I’m excited, focused, and ready for the ride 🎢.
          I believe in consistency 🔁, curiosity 🤓, and never settling for average 🌟.
          Whether I’m working solo or in a team 👥, I bring passion ❤️, energy ⚡, and creativity 💭 into everything I do.
          <br /><br />
          So if you’re someone who loves building cool stuff 🔧, solving real problems 💡, or just vibing over tech 🧑‍🚀 — I’d love to connect! 🤩
          Let’s talk 💬. Let’s build 🤖. Let’s create something unforgettable together 🌠.
        </p>
        <p>🚀 Ready to see what I'm made of?</p>
       <button className='about-skills' Link to='/skills'>Click Here</button>
      </div>

      <div className='foot5' >
        <h2>Made with 💜 By</h2>
        <img src={logo} className='logo-image' alt="logo"  />
      </div>
    </>
  );
}

export default About;
