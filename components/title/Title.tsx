import { motion } from 'framer-motion'
import React, { useEffect } from 'react'

const Title = () => {

	const textArray = ["Web", "App", "ML"]
	const typingDelay = 200
	const erasingDelay = 100
	const newTextDelay = 2000
		
	let textArrayIndex = 0
	let charIndex = 0

	useEffect(() => {
		let typedTextSpan = document.querySelector('.typed-text')
		let cursorSpan = document.querySelector('.cursor')

		function type(){
			if(charIndex < textArray[textArrayIndex].length){
				if(cursorSpan !== null){
					if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing")
					typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
					charIndex++
					setTimeout(type, typingDelay)
				}
			} else {
				cursorSpan.classList.remove("typing")
				setTimeout(erase, newTextDelay)
			}
		}
	
		function erase(){
			if (charIndex > 0) {
				if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
				typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
				charIndex--;
				setTimeout(erase, erasingDelay);
			} 
			else {
				cursorSpan.classList.remove("typing");
				textArrayIndex++;
				if(textArrayIndex>=textArray.length) textArrayIndex = 0;
				setTimeout(type, typingDelay + 1100);
			}
		}
		
		if(textArray.length) setTimeout(type, newTextDelay + 250)
	})
	
    return (
		<section className="flex flex-col items-center justify-between h-screen text-center align-middle">
			<motion.div className="background-container"
			initial={{scale:1.2, opacity:0}}
			animate={{scale:1, opacity:1}}
			transition={{duration: 1}}></motion.div>
			<div className="z-10 flex flex-row justify-center px-5 align-middle laptop:flex-col title_name">
				<span className="my-2 font-bold text-gray-200 text-8xl tablet:text-5xl">Arighna</span>
				<span className="mx-5 phone:mx-2"></span>
				<span className="my-2 font-bold text-gray-200 text-8xl tablet:text-5xl">Chakraborty</span>
			</div>
			<div className="z-10 table text-5xl title_tagline phone:text-4xl">
				<p><span className="text-green-500 typed-text"></span><span className="cursor">&nbsp; </span>Developer</p>
			</div>
			<span className="my-10 scroll-icon">
				<span className="scroll-icon__dot"></span>
			</span>
		</section>
	);
}

export default Title
