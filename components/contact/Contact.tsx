import { motion } from 'framer-motion'
import React from 'react'
import { FiInstagram, FiTwitter, FiLinkedin, FiGithub} from 'react-icons/fi'
function Contact() {
    return (
        <motion.div className="flex flex-col w-10 fixed z-5 bg-transparent contact-container tablet:flex-row tablet:w-screen tablet:justify-center"
        initial={{y:-500, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{ducation:5, delay:2}}>
            <div className="border-r-2 border-green-500 w-7 h-full tablet:border-0"></div>
            <motion.div className="social-icon"
            initial={{x:-50, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:2}}>
                <a href="https://www.instagram.com/epash_opash_dhopash/" target="_blank" rel="noreferrer">
                    <FiInstagram className="text-green-500 mx-3 my-3 icon tablet:ml-0 tablet:mr-6"/>
                </a>
            </motion.div>
            <motion.div className="social-icon"
            initial={{x:-50, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:2.2}}>
                <a href="https://twitter.com/RijuStone" target="_blank" rel="noreferrer">
                    <FiTwitter className="text-green-500 ml-3 mr-3 my-3 icon tablet:ml-0 tablet:mr-6"/>
                </a>
            </motion.div>
            <motion.div className="social-icon"
            initial={{x:-50, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:2.4}}>
                <a href="https://www.linkedin.com/in/arighna-chakraborty-509539113/" target="_blank" rel="noreferrer">
                    <FiLinkedin className="text-green-500 mx-3 my-3 icon tablet:ml-0 tablet:mr-6"/>
                </a>
            </motion.div>
            <motion.div className="social-icon"
            initial={{x:-50, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:2.6}}>
                <a href="https://github.com/riju-stone" target="_blank" rel="noreferrer">
                    <FiGithub className="text-green-500 mx-3 my-3 icon tablet:ml-0 tablet:mr-6"/>
                </a>
            </motion.div>
        </motion.div>
    )
}

export default Contact
