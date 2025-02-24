import React from 'react'
import hero from '../assets/newG.png'
import github from '../assets/git.png'
import whatsapp from '../assets/WA.png'
import linkedin from '../assets/linkedIn1.png'
import reactLogo from '../assets/React.png'
import js from '../assets/JS.png'
import tailwind from '../assets/Tailwind Css.png'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import CV from '../pdf/AmnaKhalidResume.pdf'

const Hero = () => {
  return (
    <>
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
          <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm <span className='text-yellow-500'> Amna Khalid</span></h1>
          <p className='md:text-2xl text-xl mb-4'>Web Developer & Designer</p>
          <p className='mb-4'>I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
          <a href={CV} download="Amna-Khalid-CV.pdf">
        <button 
          className='bg-black text-white px-3 py-2 w-max rounded-md'>
          Download My CV
        </button>
      </a>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={hero} alt="" className='lg:h-[90vh] h-96' />
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={js} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-gray-200 p-3 md:flex flex-col gap-4 rounded-full'> 
      <a href="https://www.linkedin.com/in/amna-khalid-612001273/" target="_blank" rel="noopener noreferrer">
  <img src={linkedin} alt="LinkedIn" className="w-20" />
</a>
       <a href="https://github.com/amnakhalid625" target="_blank" rel="noopener noreferrer"> <img src={github} alt="" className='w-20' /></a> 
       <a
  href="https://wa.me/923006524627"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={whatsapp} alt="WhatsApp" className="w-20" />
</a>
      </div>
   

    </section>

    <About />
    <Projects/>
    <Contact />
    </>
  )
}

export default Hero
