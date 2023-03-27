import Image from 'next/image'
import React from 'react'
import headshot from '../assets/img/jonathancwhite-headshot.jpeg';

const MobileAbout = () => {
  return (
	<div className="mobileAbout">
		<h5>About Me</h5>
		<div className="mobileAbout__text">
			<Image src={headshot} alt="Jonathan C White's headshot" height={100} width={100}/>
			<p>For the last 7 years, I've worked as a Software Engineer & Web Developer with some amazing
				coworkers, agencies, and clients in the digital space. My expertise lies in website design
				and development, and I love getting hands-on. I'm a multidisciplinary jack-of-all-trades,
				with a skill set that ranges from conceptual thinking to creating high-quality software.
			</p>
		</div>

		<h5 className="mt-2">Experience</h5>
		<div className="experience">
			<div className="experience__item">
				<div className="date">
					<h6>2022 - Present</h6>
				</div>
				<div className="position">
					<h6>SalesWarp - Remote</h6>
					<h5>Software Engineer</h5>
				</div>
			</div>
			<div className="experience__item">
				<div className="date">
					<h6>2021 - 2022</h6>
				</div>
				<div className="position">
					<h6>Ballistic Agency - Opelika, AL</h6>
					<h5>Sr. Web Developer</h5>
				</div>
			</div>
			<div className="experience__item">
				<div className="date">
					<h6>2020 - 2021</h6>
				</div>
				<div className="position">
					<h6>Duck Creek Technologies - Remote</h6>
					<h5>Software Engineer</h5>
				</div>
			</div>
			<div className="experience__item">
				<div className="date">
					<h6>2015 - PRESENT</h6>
				</div>
				<div className="position">
					<h6>Kodiak Agency - Auburn, AL</h6>
					<h5>CEO & Founder</h5>
				</div>
			</div>
		</div>
	</div>
  )
}

export default MobileAbout