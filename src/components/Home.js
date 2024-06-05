import React from 'react';
import { Image } from 'react-bootstrap';
import headerimg from '../Assets/Banner-Image.png';
import bannerimg from '../Assets/Banner-Image1.png';
import cardimage from '../Assets/Card-Img1.png';

const Home = () => {
  return (
      <>
      <section className='header bg-back'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <h1 className='text-primary f1-prime py-5'>I'm <br/>DEEPAN</h1>
              <h2 className='text-primary f1-prime'>Full Stack Developer</h2>
              <p className='text-secondary'>Experienced full-stack Java developer with 1 years of hands-on practice, in search of an opportunity to 
              apply my knowledge and refine my skills in the development of robust and scalable software 
              solutions. I thrive on delivering high-quality code and excel at fostering effective collaboration within 
              multifaceted teams to achieve project objectives. I am eagerly looking forward to tackling new 
              challenges and advancing my career in a dynamic and innovative work environment. </p>
            </div>
            <div className='col-12 col-md-6'>
              <Image src={headerimg} alt='headerImg' className='py-5' />
            </div>
          </div>
        </div>
      </section>
      <section className='banner bg-light'id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <Image src={bannerimg} alt='bannerimg' className='py-5 px-5' />
            </div>
            <div className='col-sm-6'>
              <h1 className='text-secondary py-5 px-5'>ABOUT</h1>
              <p className='text-secondary px-5'>
              An experienced Java programmer with a solid track 
              record of crafting robust web applications using Java 
              technologies. 
              Collaborated with the design team to implement UI/UX 
              designs and ensure a seamless user experience. 
              Skilled at collaborating with front-end teams to create 
              responsive and user-friendly UIs using HTML, CSS, 
              JavaScript, and ReactJS. 
              Experienced in integrating RESTful APIs into Angular 
              front-ends and prioritizing data security through 
              authentication and authorization measures. 
              Proficient in  version control systems like Git, I facilitate 
              streamlined codebase management, contributing to a 
              culture of effective team collaboration 
              Implemented state management using Redux for efficient data 
              flow and application scalability. 
              I am a strong advocate for software quality, actively 
              engaging in code reviews and rigorous testing to ensure 
              top-notch, error-free software. 
              My actively engage in code reviews and rigorous testing, 
              ensuring top-notch, error-free software delivery. 
              Strong at troubleshooting and resolving database- 
              related issues, ensuring data integrity and security 
              Effective communicator and collaborator, capable of 
              translating business requirements into effective 
              database solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='landing bg-back'>
        <div className='container'>
          <div className='row'>
            <h2 className='text-primary text-center py-5'>MY SKILLS</h2>
            <div className='card col-sm-4 py-5'>
              <Image src={cardimage} alt='CardImage' />
              <h1 className='text-secondary text-center py-3'>SKILLS</h1>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Home
