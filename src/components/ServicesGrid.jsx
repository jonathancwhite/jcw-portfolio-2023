import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollingText from './ScrollingText';
import kodiakAgency from '../assets/img/kodiakagencybanner.png';

const ServicesGrid = ({gridStyle}) => {
	let scrollingTextHTML = `
		<h2>CUSTOM DEVELOPMENT <span class="orange">&</span> DESIGN</h2>
	`
  return (
	<div className="grid" id="grid__outerContainer">
		<div className="row row__title">
			<div className="grid__row largegrid">
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__work">
			<div className="grid__row largegrid">
				<div className="col">

				</div>
				<div className="col filled gridText">
					<p>I don&apos;t offer more than what I can take on and I don&apos;t nominate services I am not equipped to take on. I&apos;ve spent the last 6 years perfecting my craft so that I can give you the best possible product and with that comes decisions to only offer so many services. If you&apos;re looking for anything more, please feel free to contact my agency, Kodiak Agency.</p>
				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__title">
			<div className="grid__row largegrid">
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__work">
			<div className="grid__row xlgrid">
				<div className="col">

				</div>
				<div className="col filled gridText">
					<ScrollingText html={scrollingTextHTML}/>
				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__title">
			<div className="grid__row largegrid">
				<div className="col">

				</div>
				<div className="col dark">
					<h5>SERVICE: ECOMMERCE WEBSITES</h5>
				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__work">
			<div className="grid__row largegrid">
				<div className="col">

				</div>
				<div className="col filled">
					<p>Ecommerce sites are their own beast... You need to have solid user experience to lead to conversion
						rates high enough to keep your business booming, while also keeping the user engaged and on track
						to their end goal -- buying! This service offers custom ecommerce design and development for small
						online businesses that need to take the next step in building their online presence.</p>
				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__title">
			<div className="grid__row largegrid">
				<div className="col">

				</div>
				<div className="col dark">
					<h5>SERVICE: CUSTOM WEBSITES</h5>
				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__work">
			<div className="grid__row largegrid">
				<div className="col">

				</div>
				<div className="col filled">
					<p>Custom sounds scary, but sometimes you want the best experience for your audience and platforms can't provide
						that luxury without getting in the way. Custom websites offer the flexibility of choice with the added bonus
						of leaving the restrictions behind. This service offers custom design and development for a non-platform related
						website for those looking to march to their own drum.</p>
				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__title">
			<div className="grid__row largegrid">
				<div className="col">

				</div>
				<div className="col dark">
					<h5>SERVICE: WEBSITE MAKEOVERS</h5>
				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__work">
			<div className="grid__row largegrid">
				<div className="col">

				</div>
				<div className="col filled">
					<p>Sometimes you already have a beautiful baby, but you need just a little touch-up to keep things
						looking fresh and modern. No brand wants to be stuck in the 90s, especially not their online
						persona. This service offers a fresh new look for brands that already have a comfortable home,
						but want to make sure their brand is portraying the right image to their audience.</p>
				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__title">
			<div className="grid__row largegrid">
				<div className="col">

				</div>
				<div className="col">
					{/* <h5>SERVICE: WEBSITE MAKEOVERS</h5> */}
				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__work">
			<div className="grid__row xlgrid">
				<div className="col">

				</div>
				<div className="col filled kodiak">
					<Link href="https://builtbykodiak.com" target='_blank'><Image src={kodiakAgency} alt="Kodiak Agency Brand Placement" /></Link>
				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
		<div className="row row__title">
			<div className="grid__row largegrid">
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
				<div className="col">

				</div>
			</div>
		</div>
	</div>
  )
}

export default ServicesGrid