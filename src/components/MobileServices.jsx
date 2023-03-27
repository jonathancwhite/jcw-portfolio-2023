import React from 'react'
import Image from 'next/image'
import mileHigh from '../assets/img/milehigh.png';
import creatorCarts from '../assets/img/creatorcarts.png';
import maxOrd from '../assets/img/maxordgear.png';

const MobileServices = () => {
  return (
	<div className="mobileServices">
		<h5 className='centered'>My Services</h5>
		<p><span className='orange'>*</span> I don't offer more than what I can take on and I don't nominate services I am not equipped to take on. I've spent the last 6 years perfecting my craft so that I can give you the best possible product and with that comes decisions to only offer so many services. If you're looking for anything more, please feel free to contact my agency, Kodiak Agency. <span className="orange">*</span></p>

		<div className="mobileServices__item">
			<div className="mobileServices__item--card">
				<Image src={maxOrd} alt="Ecommerce Websites"/>
				<div className="cardDetails">
					<h6>ECOMMERCE WEBSITES</h6>
					<p>Ecommerce sites are their own beast... You need to have solid user experience to lead to conversion
						rates high enough to keep your business booming, while also keeping the user engaged and on track
						to their end goal -- buying! This service offers custom ecommerce design and development for small
						online businesses that need to take the next step in building their online presence.
					</p>
				</div>
			</div>
		</div>
		<div className="mobileServices__item">
			<div className="mobileServices__item--card">
				<Image src={creatorCarts} alt="Creator Carts Preview for Custom Websites"/>
				<div className="cardDetails">
					<h6>CUSTOM WEBSITES</h6>
					<p>Custom sounds scary, but sometimes you want the best experience for your audience and platforms can't provide
						that luxury without getting in the way. Custom websites offer the flexibility of choice with the added bonus
						of leaving the restrictions behind. This service offers custom design and development for a non-platform related
						website for those looking to march to their own drum.
					</p>
				</div>
			</div>

		</div>
		<div className="mobileServices__item">
			<div className="mobileServices__item--card">
				<Image src={mileHigh} alt="Website Makeover Example" />
				<div className="cardDetails">
					<h6>WEBSITES MAKEOVER</h6>
					<p>Sometimes you already have a beautiful baby, but you need just a little touch-up to keep things
						looking fresh and modern. No brand wants to be stuck in the 90s, especially not their online
						persona. This service offers a fresh new look for brands that already have a comfortable home,
						but want to make sure their brand is portraying the right image to their audience.
					</p>
				</div>
			</div>
		</div>
	</div>
  )
}

export default MobileServices