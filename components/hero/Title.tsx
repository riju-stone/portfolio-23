import React, {useEffect} from 'react'

const Title = () => {
    return (
		<section className="flex flex-col items-center justify-around h-screen text-left align-middle">
			<div className="flex flex-row px-5 m-20 phone:flex-col">
			<span className="my-2 font-bold text-gray-200 text-7xl phone:text-5xl">Arighna</span>
			<span className="mx-5 phone:mx-2"></span>
			<span className="my-2 font-bold text-gray-200 text-7xl phone:text-5xl">Chakraborty</span>
			</div>
			<span className="my-10 scroll-icon">
				<span className="scroll-icon__dot"></span>
			</span>
		</section>
	);
}

export default Title
