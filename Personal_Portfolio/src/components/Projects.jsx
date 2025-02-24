import React from 'react'
import Portfolio from '../assets/portfolioMy.png'
import MedicalWeb from '../assets/medical2.png'
import cosmeticWeb from '../assets/CM.png'
import passwordGen from '../assets/passGen.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Portfolio in react using tailwind css and deployed on vercel',
          image: Portfolio,
          live: "https://react-porfolio-theta.vercel.app/",
          github: "https://github.com/amnakhalid625/react-porfolio.git"
        },
        {
          title: 'Doctor Appointment App',
          desc: 'This is doctor apporintment app in react using tailwind css and deployed on vercel',
          image: MedicalWeb,
          live: "https://medical-app-test-mu.vercel.app/",
          github: "https://github.com/amnakhalid625/medical-app-test.git"
        },
        {
          title: 'Cosmetic Website',
          desc: 'This is a cosmetic website in react using tailwind css and deployed on vercel',
          image: cosmeticWeb,
          live: "https://new-website-taupe.vercel.app/",
          github: "https://github.com/amnakhalid625/CosmeticWebsite.git"
        },
        {
          title: 'Password Generator',
          desc: 'This is a password generator app in react using tailwind css and deployed on vercel',
          image: passwordGen,
          live: "https://password-generator-omega-vert.vercel.app/",
          github: "https://github.com/amnakhalid625/password-generator.git"
        },
        
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-yellow-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
