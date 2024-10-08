import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollingText from './ScrollingText';
import selfPortrait from '../assets/img/jonathancwhite-headshot.jpeg';

const AboutGrid = ({ gridStyle }) => {
	let scrollingTextHTML = `
		<h2>JONATHAN C. WHITE</h2>
	`;
	return (
		<div className='grid' id='grid__outerContainer'>
			<div className='row row__title'>
				<div className='grid__row xlgrid'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row xlgrid'>
					<div className='col'></div>
					<div className='col filled gridText'>
						<ScrollingText html={scrollingTextHTML} />
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row centergrid'>
					<div className='col'></div>
					<div className='col filled portrait'>
						<Image src={selfPortrait} alt='Jonathan White portrait' />
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row centergrid'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row centergrid'>
					<div className='col'></div>
					<div className='col filled'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row centergrid'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col dark'>
						<h5>EXPERIENCE</h5>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row centergrid'>
					<div className='col'></div>
					<div className='col filled'></div>
					<div className='col'>
						<div className='workHistory'>
							<div className='workHistory__item'>
								<h6 className='orange'>2024 - Present</h6>
								<div className='workHistory__item--position'>
									<h6>CloudQix - Remote</h6>
									<h5>Software Engineer, Fullstack</h5>
								</div>
							</div>
							<div className='workHistory__item'>
								<h6 className='orange'>2023 - Present</h6>
								<div className='workHistory__item--position'>
									<h6>DEVGRU - Remote</h6>
									<h5>Software Engineer; Ecommerce Lead - Contract</h5>
								</div>
							</div>
							<div className='workHistory__item'>
								<h6 className='orange'>2022 - 2024</h6>
								<div className='workHistory__item--position'>
									<h6>SalesWarp - Remote</h6>
									<h5>Software Engineer, Fullstack</h5>
								</div>
							</div>
							{/* <div className='workHistory__item'>
								<h6 className='orange'>2023 - Present</h6>
								<div className='workHistory__item--position'>
									<h6>Auburn University - Auburn, AL</h6>
									<h5>Application Systems Analyst - Contract</h5>
								</div>
							</div> */}
							<div className='workHistory__item'>
								<h6 className='orange'>2021 - 2022</h6>
								<div className='workHistory__item--position'>
									<h6>Ballistic Agency - Opelika, AL</h6>
									<h5>Web Developer</h5>
								</div>
							</div>
						</div>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row largegrid'>
					<div className='col'></div>
					<div className='col'>{/* <h5>SERVICE: WEBSITE MAKEOVERS</h5> */}</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row xlgrid'>
					<div className='col'></div>
					<div className='col filled gridText'>
						<p className='aboutText'>
							For the last 4 years, I&apos;ve worked as a Full Stack Engineer & Web
							Developer with some amazing coworkers, agencies, and clients in the
							digital space. My expertise lies in website design and development, and
							I love getting hands-on. I&apos;m a multidisciplinary
							jack-of-all-trades, with a skill set that ranges from conceptual
							thinking to creating high-quality software.
						</p>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row largegrid'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
		</div>
	);
};

export default AboutGrid;
