import React from 'react';
import { SectionWrapper } from "../hoc";
import { styles } from '../styles';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import { connect } from '../constants';
import {fadeIn} from '../utils/motion';

const ConnectCard = ({index,title,icon,url}) => {
  return (
    <Tilt className="w-[250px] ">
      <a href={url} target="_blank">
      <motion.div
        variants={fadeIn("right","spring",0.5 * index,0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{max: 45, scale: 1, speed: 450}}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
      </a>
    </Tilt>
  )
};

const Footer = () => {

  return (
    <div>
      <h1 className={`${styles.heroHeadText} flex justify-center -mt-20 -mb-10`}>Connect With Me</h1>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {connect.map((con, index) => (
          <ConnectCard key={con.title} index={index}{...con}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Footer, "");