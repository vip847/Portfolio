import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { Typewriter } from 'react-simple-typewriter';
import { profile } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className=" flex xs:flex-col flex-row">
        <div className={`${styles.paddingX} absolute inset-0 xs:top-52 top-[60px] max-w-7xl
          mx-auto flex-1 flex flex-row items-start gap-2`}
        >
          <div className=" flex flex-col justify-center items-center">
            <div className="  w-3.5 h-3.5 rounded-full bg-[#915eff]"/>
            <div className="w-1 h-[210px] xs:h-[125px] violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <br />
            <span className="text-[#915eff]">Viplao Itankar</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                <Typewriter 
                  words={['Ethical Hacker', 'Network Administrator', 'Web Developer',
                          'Python Programmer', 'Data Scientist', 'AI Enthusiast']}
                  loop = {true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
            </p>
          </div>
        </div>
        <div className="flex-1 flex xs:justify-center justify-end items-center pr-20">
          <img src={profile} alt="profile" className="rounded-full xs:h-40 h-[180px] -mb-3 mt-14 lg:mr-20" />
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-16 bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{y:[0,24,0]}}
              transition={{duration:1.5, repeat:Infinity, repeatType:'loop'}}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero