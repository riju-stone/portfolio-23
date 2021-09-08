import React, {useEffect} from 'react'

const Title = () => {
    return (
		<section className="flex flex-col items-center justify-center align-middle title_container">
			<div className="">
				<span className="px-5 m-20 font-bold text-gray-200 text-7xl">Arighna Chakraborty</span>
			</div>
			<div className="content my-30">
			<div className="content__container"> 
				<ul className="content__container__list">
				<li className="content__container__list__item">WEB</li>
				<li className="content__container__list__item">APP</li>
				<li className="content__container__list__item">ML</li>
				<li className="content__container__list__item">GAME</li>
				</ul>
				<p className="text-green-600 content__container__text">Developer</p>		
			</div>
			</div>
			<span className="my-10 scroll-icon">
      			<span className="scroll-icon__dot"></span>
    		</span>
		</section>
	);
}

export default Title
