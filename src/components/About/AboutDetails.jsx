import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useViewportScroll, useTransform, useSpring } from "framer-motion";

//styles
import { AboutDetailsSection } from "../../styles/aboutStyles";

const skills = [
	{
		skillName: "Javascript",
		style: {
			left: "12%",
			marginTop: "130px",
			zIndex: "2",
		},
	},
	{
		skillName: "Node",
		style: {
			right: "43%",
			marginTop: "120px",
		},
	},
	{
		skillName: "Python",
		style: {
			right: "60%",
			marginTop: "80px",
			zIndex: "2",
		},
	},
	{
		skillName: "React",
		style: {
			left: "20%",
			marginTop: "-210px",
		},
	},
	{
		skillName: "SQL",
		style: {
			right: "40%",
			marginTop: "-60px",
			zIndex: "2",
		},
	},
	{
		skillName: "Flutter",
		style: {
			right: "35%",
			marginTop: "-240px",
			zIndex: "2",
		},
	},
	{
		skillName: "Mongo DB",
		style: {
			marginTop: "-100px",
			left: "30%",
			zIndex: "2",
		},
	},
	{
		skillName: "C++",
		style: {
			right: "18%",
			marginTop: "-120px",
			zIndex: "2",
		},
	},
	{
		skillName: "Java",
		style: {
			right: "15%",
			marginTop: "100px",
			zIndex: "2",
		},
	},
];

const Skills = ({ skillName, style, id, start, onCursor }) => {
	const ref = useRef(null);
	const { scrollY } = useViewportScroll();

	const transform = useTransform(
		scrollY,
		[start, start + 1],
		[0, -0.1 + id * 0.01],
		{
			clamp: false,
		}
	);
	const physics = { damping: 5, mass: 0.5, stiffness: 20 };
	const y = useSpring(transform, physics);

	return (
		<motion.p
			className={`skill ${id}`}
			ref={ref}
			style={{ ...style, y: y }}
			onMouseLeave={onCursor}
			onMouseEnter={() => onCursor("hovered")}>
			{skillName}
		</motion.p>
	);
};

const AboutDetails = ({ onCursor }) => {
	const [elementTop, setElementTop] = useState(null);
	const skillRef = useRef(null);

	useLayoutEffect(() => {
		const element = skillRef.current;
		setElementTop(element.offsetTop);
	}, [skillRef]);

	return (
		<AboutDetailsSection>
			<motion.p ref={skillRef} className="skill-title">
				Skills
			</motion.p>
			<div className="skills-container">
				{skills.map((skill, index) => (
					<Skills
						onCursor={onCursor}
						start={elementTop}
						skillName={skill.skillName}
						key={index}
						style={skill.style}
						id={index}
					/>
				))}
			</div>
		</AboutDetailsSection>
	);
};

export default AboutDetails;
